<template>
  <!-- <div class="schedule-card"> -->
  <component :is="wrapperTag" v-show="visible" :href="wrapperHref" :style="wrapperStyle" class="schedule-card" :class="{ 'is-now': isNow }" :data-title="title" target="_blank">
    <div class="schedule-card-header">
      <div v-if="isNow" class="schedule-now-badge">
        <span class="schedule-now-dot"></span>Agora
      </div>
      <div class="schedule-time">
        <ClockIcon class="schedule-time-icon"/>
        <p class="schedule-type-text">{{ time }}</p>
      </div>
      <div v-if="location" class="schedule-location">
        <LocationIcon class="schedule-location-icon"/>
        <p class="schedule-type-text">{{ location }}</p>
      </div>
    </div>
    <div class="schedule-subject">
      <p class="schedule-subject-text bold-text">{{ title }}</p>
    </div>
    <div class="schedule-phantom"></div>
  </component>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import ClockIcon from '../icons/IconClock.vue'
import LocationIcon from '../icons/IconLocation.vue'
import { useHappeningNow, registerSession, matchesFilter } from '../../composables/useHappeningNow'

const props = defineProps(['title', 'time', 'location', 'link'])

const isNow = useHappeningNow(() => props.time)
const visible = computed(() => matchesFilter(props.location, undefined))

const unregister = registerSession({ time: props.time, title: props.title, location: props.location })
onUnmounted(unregister)

// Define computed properties directly using the props object
const wrapperTag = computed(() => {
  return props.link ? 'a' : 'div';
})

const wrapperHref = computed(() => {
  return props.link ? props.link : null;
})

const wrapperStyle = computed(() => {
  return props.link ? { textDecoration: 'none', color: 'inherit' } : {};
})

const divStyle = computed(() => {
  return props.link ? { cursor: 'pointer' } : {};
})
</script>

<style scoped>
.schedule-card {
  grid-column: 1 / -1;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;
  overflow: hidden;
  padding: 0;
  transition: auto;
  background-color: var(--thc-bg-elev);
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  place-content: center;
  justify-content: space-between;
  box-shadow: inset 0 0 0 1px var(--thc-line-strong), var(--thc-shadow-md);

  --border-size: 0.2rem;
  border: var(--border-size) solid transparent;
}

.bold-text {
  font-weight: bold;
}

/* Destaque do bloco acontecendo agora (apenas no dia do evento). */
.schedule-card.is-now {
  border-color: #e03535;
  box-shadow: 0 0 0 1px #e03535, 0 10px 34px rgba(224, 53, 53, 0.32);
  animation: now-glow 2.2s ease-in-out infinite;
}

@keyframes now-glow {
  0%, 100% { box-shadow: 0 0 0 1px #e03535, 0 10px 34px rgba(224, 53, 53, 0.28); }
  50% { box-shadow: 0 0 0 1px #e03535, 0 12px 42px rgba(224, 53, 53, 0.55); }
}

.schedule-now-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  background-color: #e03535;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 0.9rem;
  padding: 0.1rem 0.5rem;
}

.schedule-now-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  animation: now-pulse 1.2s ease-in-out infinite;
}

@keyframes now-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.7); }
}

/* Com o badge "Agora" presente, reduz a margem superior do horário. */
.schedule-now-badge + .schedule-time {
  margin-top: 6px;
}

.schedule-card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.schedule-time {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: fit-content;
  background-color: #0052F5;
  color: white;
  border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  margin-top: 20px;
}

.schedule-time-icon {
  margin-right: 5px;
}

.schedule-location {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: fit-content;
  color: var(--thc-text-dim);
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  margin-top: 10px;
  margin-left: -10px;
}

.schedule-location-icon {
  height: 30px;
}

.schedule-title {
  float: left;
  color: black;
}

.schedule-subject-text {
  font-family: 'Sora', system-ui, -apple-system, sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--thc-text);
  text-align: start;
}

.schedule-text-title {
  background-color: rgb(51, 51, 51);
  font-size: 15px;
  color: white;
  text-align: center;
  margin-top: 10px;
  font-family: 'Courier New', Courier, monospace;
}

.schedule-phantom {
  visibility: hidden;
  flex: 0 1 20px;
  visibility: hidden;
}

@media screen and (max-width: 1024px) {
  .schedule-card {
    width: auto;
  }
}
</style>