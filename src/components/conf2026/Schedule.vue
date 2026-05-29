<template>
  <div v-show="visible" class="schedule-card" :class="{ 'is-now': isNow, 'is-expanded': expanded }"
    :data-title="title" @click="expanded = !expanded">
    <div>
      <div class="schedule-card-header">
        <div class="schedule-types">
          <div class="schedule-type" :class="'type-' + type.id" v-for="type in types" :key="type.id">
            <p class="schedule-type-text">{{ type.name }}</p>
          </div>
        </div>
        <div class="schedule-time-col">
          <div v-if="isNow" class="schedule-now-badge">
            <span class="schedule-now-dot"></span>Agora
          </div>
          <div class="schedule-time">
            <ClockIcon class="schedule-time-icon"/>
            <p class="schedule-type-text">{{ time }}</p>
          </div>
        </div>
      </div>
      <div v-if="location" class="schedule-location">
        <LocationIcon class="schedule-location-icon"/>
        <p class="schedule-type-text">{{ location }}</p>
      </div>
    </div>
    <div class="schedule-subject">
      <p class="schedule-subject-text bold-text">{{ title }}</p>
    </div>
    <div class="schedule-speakers">
      <div class="schedule-speaker" v-for="speaker in speakers" :key="speaker.id">
        <div class="schedule-speaker-image">
          <img :alt="speaker.name" class="schedule-speaker-img" :src="speaker.img" loading="lazy" decoding="async" />
        </div>
        <div class="schedule-speaker-about">
          <p class="schedule-speaker-text bold-text">{{ speaker.name }}</p>
          <p class="schedule-speaker-text">{{ speaker.role }}</p>
          <p class="schedule-speaker-text">{{ speaker.company }}</p>
        </div>
      </div>
    </div>
    <p class="schedule-details-hint">Toque para ver detalhes</p>
    <div class="schedule-description">
      <p class="schedule-description-text">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import ClockIcon from '../icons/IconClock.vue'
import LocationIcon from '../icons/IconLocation.vue'
import { useHappeningNow, registerSession, matchesFilter } from '../../composables/useHappeningNow'

const props = defineProps(['speakers', 'img', 'name', 'role', 'company', 'types', 'title', 'description', 'time', 'location'])

const isNow = useHappeningNow(() => props.time)
const visible = computed(() => matchesFilter(props.location, props.types))
const expanded = ref(false)

const unregister = registerSession({
  time: props.time,
  title: props.title,
  location: props.location,
  speaker: props.speakers?.map((s: { name: string }) => s.name).join(', '),
})
onUnmounted(unregister)
</script>

<style scoped>
.schedule-card {
  margin-bottom: 20px;
  /* width: 45%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;
  overflow: hidden;
  padding: 0;
  transition: auto;
  background-color: var(--thc-bg-elev);
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  box-shadow: inset 0 0 0 1px var(--thc-line-strong), var(--thc-shadow-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  --border-size: 0.2rem;
  border: var(--border-size) solid transparent;
}

@media (hover: hover) {
  .schedule-card:hover {
    transform: translateY(-3px);
    box-shadow: inset 0 0 0 1px rgba(61, 130, 255, 0.5), 0 18px 42px rgba(0, 82, 245, 0.28);
  }
}

.bold-text {
  font-weight: bold;
}

/* Destaque da sessão acontecendo agora (apenas no dia do evento). */
.schedule-card.is-now {
  border-color: #e03535;
  box-shadow: 0 0 0 1px #e03535, 0 10px 34px rgba(224, 53, 53, 0.32);
  animation: now-glow 2.2s ease-in-out infinite;
}

@keyframes now-glow {
  0%, 100% { box-shadow: 0 0 0 1px #e03535, 0 10px 34px rgba(224, 53, 53, 0.28); }
  50% { box-shadow: 0 0 0 1px #e03535, 0 12px 42px rgba(224, 53, 53, 0.55); }
}

.schedule-time-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.schedule-now-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  margin-right: 10px;
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

/* Quando o badge "Agora" aparece, ele já traz a margem superior; remove a do horário. */
.schedule-now-badge + .schedule-time {
  margin-top: 6px;
}

.schedule-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.schedule-types {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 10px;
}

.schedule-type {
  width: fit-content;
  background-color: #0052F5;
  color: white;
  border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;
  padding: 0px 0.5rem 0px 0.5rem;
  margin-bottom: 5px;
}

.schedule-time {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
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
  line-height: 1.3;
  margin-top: 12px;
  margin-bottom: 10px;
  color: var(--thc-text);
  text-align: start;
}

.schedule-speakers {
  display: flex;
}

.schedule-speaker {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
}

.schedule-speaker-image {
  overflow: hidden;
  width: 70px;
  min-width: 70px;
  height: 70px;
  border-radius: 50%;
}

.schedule-speaker-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.schedule-speaker-about {
  background-color: transparent;
  padding: 10px;
  align-items: center;
}

.schedule-speaker-text {
  font-size: 13px;
  color: var(--thc-text-dim);
  text-align: left;
}

.schedule-speaker-text.bold-text {
  color: var(--thc-text);
}

.schedule-text-title {
  background-color: rgb(51, 51, 51);
  font-size: 15px;
  color: white;
  text-align: center;
  margin-top: 10px;
  font-family: 'Courier New', Courier, monospace;
}

.schedule-description {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(5, 10, 23, 0.97);
  transform: translateY(0);
  height: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: start;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: justify;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.28) transparent;
}

.schedule-description-text {
  font-size: 14px;
  color: #e8eefc;
  line-height: 1.6;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: var(--thc-mono);
  white-space: pre-line
}

/* Hover só em dispositivos que realmente têm hover (desktop). */
@media (hover: hover) {
  .schedule-card:hover .schedule-description {
    height: 101%;
    transform: translateY(-100%);
  }
}

/* No toque (mobile), a descrição abre ao tocar no card. */
.schedule-card.is-expanded .schedule-description {
  height: 101%;
  transform: translateY(-100%);
}

.schedule-card {
  cursor: pointer;
}

/* Dica de toque: aparece só em telas sem hover (touch). */
.schedule-details-hint {
  display: none;
  font-size: 12px;
  color: #0052F5;
  font-weight: bold;
  margin-bottom: 12px;
}

@media (hover: none) {
  .schedule-details-hint {
    display: block;
  }
}

.type-security {
  background-color: #e03535;
}

.type-diversity {
  background-color: #c530be;
}

.type-qa {
  background-color: #1fbd1f;
}

.type-backend {
  background-color: #5030c5;
}

.type-frontend {
  background-color: #037aca;
}

.type-mobile {
  background-color: #ca0360;
}

.type-opensource {
  background-color: #ca0360;
}

.type-ai {
  background-color: #000000;
}

.type-career {
  background-color: #0fb87f;
}

.type-hardware {
  background-color: #cc6c1d;
}

.type-robotics {
  background-color: #cc6c1d;
}

.type-vr {
  background-color: #cc6c1d;
}

.type-devops {
  background-color: #08a8a8;
}

.type-data{
  background-color: #cc1d92;
}

.type-product {
  background-color: #5030c5;
}

.type-gde {
  background-image: linear-gradient(90deg,
    #4285F4 0% 25%,
    #EA4335 25% 50%,
    #FBBC04 50% 75%,
    #34A853 75% 100%);
  color: white;
  font-weight: 700;
  letter-spacing: 0.5px;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.28);
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.45);
}

@supports (background: paint(houdini)) {
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  .schedule-card:hover {
    border: var(--border-size) solid transparent;
    background-image: linear-gradient(var(--thc-bg-elev), var(--thc-bg-elev)),
      conic-gradient(from var(--angle),
        #00e0c6 0deg 90deg,
        #0052F5 90deg 270deg,
        #00e0c6 270deg 360deg);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    animation: rotate 4s linear infinite;
  }
}

@media screen and (max-width: 1512px) {
  .schedule-card {
    width: auto;
  }

  .schedule-speakers {
    flex-direction: column;
  }
}
</style>