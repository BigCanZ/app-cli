<template>
  <div class="message-outer" id="message-outer">
    <div class="message-inner">
      <transition name="fade">
        <div class="message-box" v-show="visible">
          <p class="message-title" v-html="message"></p>
          <div class="msg-btn border-top">
            <span class="msg-close border-right" @click="msgclose('cancel')" v-if="showClose">{{cancel}}</span>
            <span class="msg-ckeck" @click="msgclose('confirm')">{{confirm}}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageBox',
  data () {
    return {
      message: 'Confirm to perform this operation?',
      type: '',
      showClose: true,
      visible: false,
      cancel: '取消',
      confirm: '确认'
    }
  }
}
</script>

<style lang="scss" scoped>
.message-outer {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,.4);
  z-index: 9999;
  .message-inner {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10000;
    .message-box {
      width: 5.4rem;
      background: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(1);
      border-radius: .24rem;
      overflow: hidden;
      &.fade-enter-active, &.fade-leave-active {
        transition: transform .2s;
      }
      &.fade-enter, &.fade-leave-active {
        transform: translate(-50%,-50%) scale(0);
      }
      .message-title {
        width: 80%;
        padding: .4rem 10%;
        max-height: 6rem;
        overflow-y: auto;
        text-align: center;
        font-size: .34rem;
        line-height: .4rem;
        color: #030303;
        font-weight: 700;
      }
      .msg-btn {
        width: 100%;
        display: flex;
        border-top: .01rem solid rgba(77,77,77,0.78);
      }
      .msg-btn {
        span {
          display: block;
          width: 50%;
          line-height: .88rem;
          font-size: .34rem;
          color: #999;
          text-align: center;
          &.msg-ckeck {
            flex: 1;
            color: #007AFF !important;
          }
          &.msg-close {
            border-right: .01rem solid rgba(77,77,77,0.78);
          }
        }
      }
    }
  }
}
</style>
