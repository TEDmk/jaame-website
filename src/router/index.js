import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import ContactView from '@/views/ContactView.vue'
import NewsView from '@/views/NewsView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserView from '@/views/UserView.vue'
import ArticleCreateView from '@/views/ArticleCreateView.vue'
import RequestRecoveryView from '@/views/RequestRecoveryView.vue'
import ArticleView from '@/views/ArticleView.vue'



const routes = [
  { path: '/', component: LandingPageView },
  { path: '/contact', component: ContactView },
  { path: '/news', component: NewsView },
  { path: '/create-article', component: ArticleCreateView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/me', component: UserView },
  { path: '/request-recovery', component: RequestRecoveryView },
  { path: '/news/:id', component: ArticleView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const privatePages = ['/me'];
  const authRequired = privatePages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router
