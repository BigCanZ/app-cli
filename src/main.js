import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 插件
import '@/plugins'
// 全局样式，重置样式引入
import 'css/index.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
