import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/conf/2024',
      name: 'conf2024',
      component: () => import('../views/TechHubConf2024.vue')
    },
    {
      path: '/conf/2025',
      name: 'conf2025',
      component: () => import('../views/TechHubConf2025.vue')
    },
    {
      path: '/conf',
      name: 'conf',
      component: () => import('../views/TechHubConf.vue')
    },
    {
      path: '/sorteador',
      name: 'sorteador',
      component: () => import('../views/SorteadorView.vue')
    },
    {
      path: '/conf/2026/fotos',
      name: 'fotos',
      // Lê o destino de um arquivo estático com no-store, para que o link do
      // Drive possa ser trocado depois (editando fotos-link.txt) sem ficar preso
      // ao cache do navegador nem ao precache do service worker (PWA).
      async beforeEnter() {
        const fallback = 'https://drive.google.com/drive/folders/13lIFfVrlZrR0qM6JcGrX5FgC_GCe9tkJ?usp=sharing'
        // replace() em vez de href = ...: não cria entrada no histórico, então
        // o botão "voltar" do navegador pula a página /fotos (que não renderiza
        // nada) e volta direto para a página anterior, sem tela em branco.
        try {
          const res = await fetch('/conf/2026/fotos-link.txt', { cache: 'no-store' })
          const url = (await res.text()).trim()
          window.location.replace(url || fallback)
        } catch {
          window.location.replace(fallback)
        }
        return false
      },
      component: () => import('../views/TechHubConf.vue')
    }
  ]
})

export default router
