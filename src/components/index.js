import Vue from 'vue'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const command = require.context('./command', true, /\.js$/)
const common = require.context('./common', false, /\.vue$/)
// 命令式组件
command.keys().map(fileName => {
  const componentConfig = command(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.prototype[`$${componentName.toLowerCase()}`] = componentConfig.default || componentConfig
})
// 通用组件
common.keys().map(fileName => {
  const componentConfig = common(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
