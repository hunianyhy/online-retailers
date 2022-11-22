import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '/',
    redirect:'/home'
  },
  {
    // 首页
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      isShow:true
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    // 搜索页
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
    meta:{
      isShow:true
    }
  },
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: Login,
    
  },
  // 注册页
  {
    path: '/register',
    name: 'register',
    component: Register,
    
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// //解决vue路由重复导航错误
// //获取原型对象上的push函数
// let originalPush = VueRouter.prototype.push
// //修改原型对象中的push方法
// VueRouter.prototype.push = function(location,resolve,reject) {
//    if(resolve && reject){
//     originalPush.call(this,location,resolve,reject)
//    }else{
//     originalPush.call(this,location,()=>{},()=>{})
//    }
// }

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router
