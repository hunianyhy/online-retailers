import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from './home'
import search from './search'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    
  },
  // 汇总所有的小仓库
  modules: {
    home,
    search
  }
})


