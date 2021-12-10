import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共组件
import Nav from '@/components/Nav'
// 浏览器控制台不显示 非生产环境打包的提示
Vue.config.productionTip = false

// 注册全局组件
Vue.component(Nav.name,Nav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

