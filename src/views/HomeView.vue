<script setup lang="ts">
  import TheWelcome from '../components/TheWelcome.vue'
  import InitialRouter from '../components/InitialRouter.vue'
</script>

<template>
  <div class="app">
    <InitialRouter />
    
    <main>
      <TheWelcome />
    </main>
  </div>
</template>

<style>
  .app {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>