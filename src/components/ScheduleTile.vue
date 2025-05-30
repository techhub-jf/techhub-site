<template>
  <!-- <div class="schedule-card"> -->
  <component :is="wrapperTag" :href="wrapperHref" :style="wrapperStyle" class="schedule-card" target="_blank">
    <div class="schedule-card-header">
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
import { computed } from 'vue'
import ClockIcon from '../components/icons/IconClock.vue'
import LocationIcon from '../components/icons/IconLocation.vue'

const props = defineProps(['title', 'time', 'location', 'link'])

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
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  place-content: center;
  justify-content: space-between;

  --border-size: 0.2rem;
  border: var(--border-size) solid transparent;
}

.bold-text {
  font-weight: bold;
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
  color: rgb(43, 43, 43);
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
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
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