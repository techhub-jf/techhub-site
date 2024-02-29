<script setup lang="ts">
  import TheWelcome from '../components/TheWelcome.vue'
  import InitialRouter from '../components/InitialRouter.vue'
</script>

<template>
  <div class="app">
    <InitialRouter />
    
    <main class="main">
      <TheWelcome />
    </main>
  </div>
</template>

<style scoped>
  .app {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    .app {
      width: 100%;
      flex-direction: column;
    }

    .main {
      align-self: center;
      margin-top: 10vh;
      margin-right: 10vw;
      margin-left: 10vw;
    }
  }
</style>