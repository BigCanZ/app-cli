/**
  * @method this.$toast(options)
  * @param {string} message 传入的提示文本
  * @param {number} duration 提示显示的时间
  * @param {string} position 提示显示的位置，封闭为 top,middle,bottom
  */

import Vue from 'vue'
import toast from './Toast.vue'
const ToastConstructor = Vue.extend(toast)
const removeDom = event => {
  event.target.parentNode.removeChild(event.target)
}
ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}
const Toast = (options = {}) => {
  var instance = new ToastConstructor().$mount(document.createElement('div'))
  const duration = options.duration || 2000
  instance.message = typeof options === 'string' ? options : options.message
  instance.position = options.position || 'bottom'
  if (instance.message === '') {
    return false
  } else {
    document.body.appendChild(instance.$el)
    instance.visible = true
    Vue.nextTick(() => {
      instance.timer = setTimeout(function () {
        instance.close()
      }, duration)
    })
    return instance
  }
}

export default Toast
