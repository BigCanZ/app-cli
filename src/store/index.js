import Vue from 'vue'
import Vuex from 'vuex'
// 开发环境调试输出
import createLogger from 'vuex/dist/logger'
// 模块引入
import count from './modules/count'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    count
  },
  getters: {
    count: (state) => state.count.count
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
