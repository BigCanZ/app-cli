import Vue from 'vue'
// 工具函数集
import _ from 'lodash'
// rem 布局
import 'utils/rem.js'
// 全局组件
import 'components'
// api 引入
import '@/api'
// 本地存储操作
import { Cookie, Local, Session } from 'utils/storage.js'
// 调试工具
import Vconsole from 'vconsole'
// 300ms 延迟问题
import fastClick from 'fastclick'
const vConsole = new Vconsole()
// 挂载
Vue.prototype.$cookie = Cookie
Vue.prototype.$local = Local
Vue.prototype.$session = Session
Vue.prototype._ = _
Vue.use(vConsole)
fastClick.attach(document.body)
