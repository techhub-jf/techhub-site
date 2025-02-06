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
      path: '/conf',
      name: 'conf',
      component: () => import('../views/TechHubConf.vue')
    }
  ]
})

export default router
