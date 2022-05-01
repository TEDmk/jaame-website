import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import ContactView from '@/views/ContactView.vue'
import NewsView from '@/views/NewsView.vue'


const routes = [
  { path: '/', component: LandingPageView },
  { path: '/contact', component: ContactView },
  { path: '/news', component: NewsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
