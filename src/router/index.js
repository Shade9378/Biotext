import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Unit1View from '../views/Unit1View.vue'
import Unit2View from '../views/Unit2View.vue'

const routes=[
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unit1',
    name: 'unti1',
    component: Unit1View
  },

  {
    path: '/unit2',
    name: 'unit2',
    component: Unit2View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
