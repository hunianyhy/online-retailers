import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mock
import './mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 引入三级联动组件
import TypeNav from '@/components/TypeNav'
// 全局注册三级联动组件
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
