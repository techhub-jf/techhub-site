<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Chopp da TI</template>

    Encontro quinzenal gratuito para bater um papo sobre tech!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Redes sociais</template>

    Todas as redes estão no nosso
    <a href="https://linktr.ee/techhubjf" target="_blank" rel="noopener">linktr.ee</a>
  </WelcomeItem>
</template>
