import { createStore } from 'vuex'
import { account } from './account.module'
import { article } from './article.module'
import { menu } from './menu.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account,
    article,
    menu,
  }
})
