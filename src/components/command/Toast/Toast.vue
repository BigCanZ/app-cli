<template>
  <transition name='fade'>
    <div v-show='this.visible' :class='this.position' class='toast'>
      <i v-html="this.message"></i>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      position: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  transform: translate(-50%,-50%) scale(1);
  word-wrap: break-word;
  padding: .2rem;
  text-align: center;
  z-index: 9999;
  font-size: .3rem;
  line-height: .36rem;
  max-width: 95%;
  color: #fff;
  border-radius:  .12rem;
  background: rgba(0,0,0,0.7);
  overflow: hidden;
  &.middle {
    top: 50%;
  }
  &.top {
    top: 10%;
  }
  &.bottom {
    top: 90%;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-active {
  transform: translate(-50%,-50%) scale(0);
}
</style>
