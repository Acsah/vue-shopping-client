import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta:{
      // 只给需要隐藏Footer的路由添加此配置
      isHideFooter:true
    }
  },
  {
    path: '/register',
    component: Register,
    meta:{
      // 只给需要隐藏Footer的路由添加此配置
      isHideFooter:true
    }
  },
  {
    name:'search',
    path: '/search/:keyword',
    component: Search
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
