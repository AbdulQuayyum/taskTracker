import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews'
import AboutViews from '../views/AboutViews'

const routes = [
  {
    path: '/',
    name: 'HomeViews',
    component: HomeViews,
  },
  {
    path: '/about',
    name: 'AboutViews',
    component: AboutViews,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
