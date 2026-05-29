<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import GroupIcon from './icons/IconGroup.vue'
import StoreIcon from './icons/IconStore.vue'
import RaffleIcon from './icons/IconRaffle.vue'
</script>

<template>
  <WelcomeItem link="/conf" :internalRoute=true :highlight="true">
    <template #icon>
      <GroupIcon />
    </template>
    <template #heading>Tech Hub Conf</template>

    O maior evento de tecnologia de Juiz de Fora e região!
  </WelcomeItem>

  <WelcomeItem link="https://www.instagram.com/techhubjf">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Chopp da TI</template>

    Encontro mensal gratuito para bater um papo sobre tech!
  </WelcomeItem>

  <WelcomeItem link="https://loja.techhubjf.org/">
    <template #icon>
      <StoreIcon />
    </template>
    <template #heading>Loja</template>

    Vista a camisa do Tech Hub JF! Confira nossa loja oficial.
  </WelcomeItem>

  <WelcomeItem link="https://linktr.ee/techhubjf">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Redes sociais</template>

    Todas as redes estão no nosso linktr.ee
  </WelcomeItem>

  <WelcomeItem link="/sorteador">
    <template #icon>
      <RaffleIcon />
    </template>
    <template #heading>Sorteador</template>

    Sorteador para eventos. Fácil, rápido e 100% client side
  </WelcomeItem>
</template>
