import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共组件
import Nav from '@/components/Nav'
import Pagination from '@/components/Pagination'

import './plugins/swiper' //加载swiper的配置
import  './mock/mockServer'


// 浏览器控制台不显示 非生产环境打包的提示
Vue.config.productionTip = false

// 注册全局组件
Vue.component(Nav.name,Nav)
Vue.component(Pagination.name,Pagination)

new Vue({
  beforeCreate(){
    // 将当前vm作为总线对象挂载到Vue原型对象上
    Vue.prototype.$bus=this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

