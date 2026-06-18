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
      path: '/fotos',
      name: 'fotos',
      beforeEnter() {
        window.location.href = 'https://drive.google.com/drive/folders/13lIFfVrlZrR0qM6JcGrX5FgC_GCe9tkJ?usp=sharing'
      },
      component: () => import('../views/TechHubConf.vue')
    }
  ]
})

export default router
