import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Unit1View from '../views/Unit1View.vue'

const routes=[
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: Unit1View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
