import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      // 只给需要隐藏Footer的路由添加此配置
      isHideFooter: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      // 只给需要隐藏Footer的路由添加此配置
      isHideFooter: true
    }
  },
  {
    name: 'search',
    path: '/search/:keyword',
    component: Search
  },
  {
    // 一般都是params参数；对于name,age 的一般用query参数
    path: '/detail/:id',
    component: Detail
  }, 
  {
    path: '/addcartsuccess/:goodsNum',
    component: AddCartSuccess
  },
  {
    path:'/shopcart',
    component:ShopCart
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})

export default router
