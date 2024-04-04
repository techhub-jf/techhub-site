<template>
  <div class="schedule-card">
    <div class="schedule-card-header">
      <div class="schedule-time">
        <ClockIcon class="schedule-time-icon"/>
        <p class="schedule-type-text">{{ time }}</p>
      </div>
    </div>
    <div class="schedule-subject">
      <p class="schedule-subject-text bold-text">{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClockIcon from '../components/icons/IconClock.vue'

defineProps(['title', 'time'])
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

  --border-size: 0.2rem;
  border: var(--border-size) solid transparent;
}

.bold-text {
  font-weight: bold;
}

.schedule-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  margin-right: 10px;
}

.schedule-time-icon {
  margin-right: 5px;
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

@media screen and (max-width: 1024px) {
  .schedule-card {
    width: auto;
  }
}
</style>