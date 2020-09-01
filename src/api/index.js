import Vue from 'vue'
const requireApi = require.context('./module', false, /.js$/)
let api = {}
requireApi.keys().forEach((key, index) => {
  console.log(key)
  api = {
    ...api,
    ...requireApi(key)
  }
})

Vue.prototype.$api = api
