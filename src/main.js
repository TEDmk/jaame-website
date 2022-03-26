import Vue from 'vue'
import App from './App.vue'
import LandingPage from './components/LandingPage.vue'
import Contact from './components/Contact.vue'
import News from './components/pages/News.vue'
import VueRouter from 'vue-router'
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: LandingPage },
  { path: '/contact', component: Contact },
  { path: '/news', component: News },
]

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
