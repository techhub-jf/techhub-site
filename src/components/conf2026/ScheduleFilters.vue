<template>
  <div class="filters">
    <div class="filter-group">
      <span class="filter-label">Sala</span>
      <div class="filter-chips">
        <button class="chip" :class="{ active: !filter.room }" @click="filter.room = null">
          Todas
        </button>
        <button v-for="r in ROOMS" :key="r.key" class="chip"
          :class="{ active: filter.room === r.key }"
          @click="filter.room = filter.room === r.key ? null : r.key">
          {{ r.label }}
        </button>
      </div>
    </div>

    <div class="filter-group">
      <span class="filter-label">Trilha</span>
      <div class="filter-chips">
        <button class="chip" :class="{ active: !filter.tag }" @click="filter.tag = null">
          Todas
        </button>
        <button v-for="t in TRACKS" :key="t.id" class="chip chip-track" :class="['track-' + t.id, { active: filter.tag === t.id }]"
          @click="filter.tag = filter.tag === t.id ? null : t.id">
          {{ t.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scheduleFilter as filter, ROOMS, TRACKS } from '../../composables/useHappeningNow'
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 900px;
  margin: 0 auto 36px;
  text-align: left;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-label {
  font-family: var(--thc-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--thc-text-dim);
  /* Largura fixa para "Sala" e "Trilha" ficarem alinhados e os chips de ambos
     começarem na mesma vertical. */
  width: 60px;
  flex: 0 0 60px;
}

.filter-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.chip {
  border: 1.5px solid var(--thc-line-strong);
  background-color: transparent;
  color: var(--thc-text-dim);
  border-radius: 999px;
  padding: 7px 15px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.16s ease;
  line-height: 1.2;
}

.chip:hover {
  border-color: var(--thc-brand-bright);
  color: var(--thc-text);
}

.chip.active {
  background-color: var(--thc-brand);
  border-color: var(--thc-brand);
  color: white;
  box-shadow: 0 6px 18px rgba(0, 82, 245, 0.45);
}

/* A trilha selecionada ganha a cor da própria trilha. */
.chip-track.active {
  border-color: transparent;
  color: white;
}

.chip-track.track-ai.active { background-color: #000000; }
.chip-track.track-security.active { background-color: #e03535; }
.chip-track.track-devops.active { background-color: #08a8a8; }
.chip-track.track-data.active { background-color: #cc1d92; }
.chip-track.track-career.active { background-color: #0fb87f; }
.chip-track.track-product.active { background-color: #5030c5; }

@media screen and (max-width: 768px) {
  .filters {
    /* mesma margem lateral dos cards da programação no mobile */
    margin: 0 10px 24px;
  }

  /* Chips roláveis horizontalmente no mobile pra não quebrar muitas linhas. */
  .filter-chips {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 2px;
  }

  .filter-chips::-webkit-scrollbar {
    display: none;
  }

  .chip {
    white-space: nowrap;
    flex: 0 0 auto;
  }
}
</style>
