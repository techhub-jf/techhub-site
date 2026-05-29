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
            <span v-if="e.location" class="agenda-loc">{{ e.location }}</span>
          </span>
        </li>
        <li v-if="!next.length" class="agenda-empty">Por hoje é só! 🎉</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAgenda, useEventLive, type AgendaEntry } from '../composables/useHappeningNow'

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
  background-color: white;
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: 0 10px 30px rgba(3, 29, 66, 0.08);
  border: 1px solid rgba(3, 29, 66, 0.06);
}

.agenda-col--now {
  border-top: 4px solid #e03535;
}

.agenda-col--next {
  border-top: 4px solid #0052F5;
}

.agenda-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #e03535;
  margin-bottom: 14px;
}

.agenda-label--next {
  color: #0052F5;
}

.agenda-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #e03535;
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
  background-color: rgba(3, 29, 66, 0.05);
}

.agenda-time {
  font-variant-numeric: tabular-nums;
  font-weight: 800;
  color: #031D42;
  font-size: 14px;
  white-space: nowrap;
}

.agenda-info {
  display: flex;
  flex-direction: column;
}

.agenda-title {
  color: #031D42;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
}

.agenda-loc {
  color: #5a6b82;
  font-size: 12px;
  margin-top: 2px;
}

.agenda-empty {
  color: #8a97a8;
  font-size: 14px;
  font-style: italic;
  padding: 8px 10px;
}

@media screen and (max-width: 768px) {
  .agenda {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 28px;
  }
}
</style>
