<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import GroupIcon from './icons/IconGroup.vue'
</script>

<template>
  <WelcomeItem link="/conf" :internalRoute=true :highlight="true">
    <template #icon>
      <GroupIcon />
    </template>
    <template #heading>Tech Hub Conf</template>

    O maior evento de tecnologia do Juiz de Fora e região!
  </WelcomeItem>

  <WelcomeItem link="https://www.instagram.com/techhubjf">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Chopp da TI</template>

    Encontro quinzenal gratuito para bater um papo sobre tech!
  </WelcomeItem>

  <WelcomeItem link="https://linktr.ee/techhubjf">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Redes sociais</template>

    Todas as redes estão no nosso linktr.ee
  </WelcomeItem>
</template>
