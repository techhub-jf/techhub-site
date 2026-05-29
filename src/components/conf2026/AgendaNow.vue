<template>
  <div v-if="eventLive" class="agenda">
    <div class="agenda-col agenda-col--now">
      <span class="agenda-label">
        <span class="agenda-dot"></span>Acontecendo agora
      </span>
      <ul class="agenda-list">
        <li v-for="e in current" :key="e.id" class="agenda-item" @click="goTo(e)">
          <span class="agenda-time">{{ e.time }}</span>
          <span class="agenda-info">
            <span class="agenda-title">{{ e.title }}</span>
            <span v-if="e.speaker" class="agenda-speaker">{{ e.speaker }}</span>
            <span v-if="e.location" class="agenda-loc">{{ e.location }}</span>
          </span>
        </li>
        <li v-if="!current.length" class="agenda-empty">Nada acontecendo neste instante</li>
      </ul>
    </div>

    <div class="agenda-col agenda-col--next">
      <span class="agenda-label agenda-label--next">A seguir</span>
      <ul class="agenda-list">
        <li v-for="e in next" :key="e.id" class="agenda-item" @click="goTo(e)">
          <span class="agenda-time">{{ e.time }}</span>
          <span class="agenda-info">
            <span class="agenda-title">{{ e.title }}</span>
            <span v-if="e.speaker" class="agenda-speaker">{{ e.speaker }}</span>
            <span v-if="e.location" class="agenda-loc">{{ e.location }}</span>
          </span>
        </li>
        <li v-if="!next.length" class="agenda-empty">Por hoje é só! 🎉</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAgenda, useEventLive, type AgendaEntry } from '../../composables/useHappeningNow'

const eventLive = useEventLive()
const { current, next } = useAgenda()

function goTo(e: AgendaEntry) {
  const el = document.querySelector(`.schedule-card[data-title="${CSS.escape(e.title)}"]`)
  ;(el ?? document.getElementById('schedule'))?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
.agenda {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: left;
}

.agenda-col {
  background-color: var(--thc-bg-elev);
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: inset 0 0 0 1px var(--thc-line), var(--thc-shadow-md);
  border-top: 3px solid transparent;
}

.agenda-col--now {
  border-top-color: var(--thc-now);
  box-shadow: inset 0 0 0 1px rgba(255, 59, 92, 0.25), 0 14px 40px rgba(255, 59, 92, 0.12);
}

.agenda-col--next {
  border-top-color: var(--thc-brand);
  box-shadow: inset 0 0 0 1px rgba(0, 82, 245, 0.28), 0 14px 40px rgba(0, 82, 245, 0.12);
}

.agenda-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--thc-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--thc-now);
  margin-bottom: 14px;
}

.agenda-label--next {
  color: var(--thc-brand-bright);
}

.agenda-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: var(--thc-now);
  box-shadow: 0 0 12px var(--thc-now);
  animation: agenda-pulse 1.2s ease-in-out infinite;
}

@keyframes agenda-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.6); }
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.agenda-item {
  display: flex;
  gap: 12px;
  align-items: baseline;
  padding: 8px 10px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.18s ease;
}

.agenda-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.agenda-time {
  font-family: var(--thc-mono);
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--thc-accent);
  font-size: 13px;
  white-space: nowrap;
}

.agenda-info {
  display: flex;
  flex-direction: column;
}

.agenda-title {
  color: var(--thc-text);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
}

.agenda-speaker {
  color: var(--thc-text);
  font-size: 12.5px;
  font-weight: 600;
  margin-top: 3px;
}

.agenda-loc {
  color: var(--thc-text-dim);
  font-size: 12px;
  margin-top: 2px;
}

.agenda-empty {
  color: var(--thc-text-dim);
  font-size: 14px;
  font-style: italic;
  padding: 8px 10px;
}

@media screen and (max-width: 768px) {
  .agenda {
    grid-template-columns: 1fr;
    gap: 12px;
    /* mesma margem lateral dos cards da programação no mobile */
    margin: 0 10px 28px;
  }
}
</style>
