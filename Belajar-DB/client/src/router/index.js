import { createRouter, createWebHistory } from 'vue-router'
import HomeUser from '../views/HomeUser.vue'
import DetailUser from '../views/DetailUser.vue'

const routes = [
  {
    path: '/users',
    name: 'user',
    component: HomeUser
  },
  {
    path: '/users/:id',
    name: 'user-detail',
    component: DetailUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
