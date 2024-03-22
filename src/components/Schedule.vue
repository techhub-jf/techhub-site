<template>
  <div class="schedule-card">
    <div class="schedule-card-header">
      <div class="schedule-type" :class="'type-' + type.id" v-for="type in types">
        <p class="schedule-type-text">{{ type.name }}</p>
      </div>
    </div>
    <div class="schedule-subject">
      <p class="schedule-subject-text bold-text">{{ title }}</p>
    </div>
    <div class="schedule-speaker">
      <div class="schedule-speaker-image">
        <img alt="Speaker 1" class="schedule-speaker-img" :src="img" />
      </div>
      <div class="schedule-speaker-about">
        <p class="schedule-speaker-text bold-text">{{ name }}</p>
        <p class="schedule-speaker-text">{{ role }}</p>
        <p class="schedule-speaker-text">{{ company }}</p>
      </div>
    </div>
    <div class="schedule-description">
      <p class="schedule-description-text">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['img', 'name', 'role', 'company', 'types', 'title', 'description'])
</script>

<style scoped>
.schedule-card {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.schedule-card-header {
  display: flex;
  flex-direction: row;
}

.schedule-type {
  width: fit-content;
  background-color: #0052F5;
  color: white;
  border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;
  padding: 0px 0.5rem 0px 0.5rem;
  margin-top: 20px;
  margin-right: 10px;
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

.schedule-speaker {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
}

.schedule-speaker-image {
  overflow: hidden;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.schedule-speaker-img {
  width: 100%;
  height: auto;
}

.schedule-speaker-about {
  background-color: white;
  padding: 10px;
  align-items: center;
}

.schedule-speaker-text {
  font-size: 13px;
  color: black;
  text-align: left;
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
  background-color: rgba(51, 51, 51, .97);
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
  overflow-y: scroll;
}

.schedule-description-text {
  font-size: 15px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-line
}

.schedule-card:hover {
  .schedule-description {
    height: 101%;
    transform: translateY(-100%);
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

.type-devops {
  background-color: #08a8a8;
}

.type-data{
  background-color: #cc1d92;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
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
    border: var(--border-size) dotted transparent;
    background-image: linear-gradient(to right,
        rgb(255 255 255),
        rgb(255 255 255)),
      conic-gradient(from var(--angle),
        #739cee 0deg 270deg,
        #0052F5 270deg 360deg);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    animation: rotate 4s linear infinite;
  }
}

@media screen and (max-width: 1024px) {
  .schedule-card {
    width: auto;
  }
}
</style>