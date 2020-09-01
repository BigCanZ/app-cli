/**
  * @method this.$message(options)
  * @param {string} message 传入的提示文本
  * @param {string} type 提示的类型 confirm,alert
  * @param {function} callback 点击后返回的数据，确认返回confirm,取消返回cancel
  */

import Vue from 'vue'
import Message from './Message.vue'
const MessageConstructor = Vue.extend(Message)

const removeDom = event => {
  const child = document.querySelector('body')
  const childList = child.querySelectorAll('.message-outer')
  for (let i = 0; i < childList.length; i++) {
    child.removeChild(childList[i])
  }
}

MessageConstructor.prototype.msgclose = function (state) {
  this.visible = false
  removeDom()
  setTimeout(() => {
    if (this.callback) {
      this.callback(state)
    }
  }, 300)
}

const MessageBox = (options = {}) => {
  var instance = new MessageConstructor().$mount(document.createElement('div'))
  instance.message = options.message
  instance.type = options.type
  instance.cancel = options.cancel || '取消'
  instance.confirm = options.confirm || '确定'
  if (instance.type === 'alert') {
    instance.showClose = false
  } else if (instance.type === 'confirm') {
    instance.showClose = true
  }
  instance.callback = options.callback
  document.body.appendChild(instance.$el)
  instance.visible = true
  return instance
}

export default MessageBox
