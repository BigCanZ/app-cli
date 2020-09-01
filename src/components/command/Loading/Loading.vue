<template>
    <div class="loading-wrapper">
        <div class="toast-loading">
            <div class="toast-loading-box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class="toast-loading-text">{{loadingTxt}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loadingTxt: '加载中...'
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrapper {
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.6);
  .toast-loading {
    width: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) scale(1);
    &-box {
      width: 1.6rem;
      height: .8rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      span {
        display: inline-block;
        width: .16rem;
        height: 100%;
        border-radius: .8rem;
        background: lightgreen;
        animation: load 1s ease infinite;
        &:nth-child(2){
          animation-delay:0.2s;
        }
        &:nth-child(3){
          animation-delay:0.4s;
        }
        &:nth-child(4){
          animation-delay:0.6s;
        }
        &:nth-child(5){
          animation-delay:0.8s;
        }
      }
    }
    &-text {
      margin-top: 1rem;
      text-align: center;
      color: #fff;
      font-size: .32rem;
    }
  }
}
@keyframes load {
  0%, 100% {
    height: .8rem;
    background: lightgreen;
  }
  50% {
    height: 1.4rem;
    margin: -.3rem 0;
    background: lightblue;
  }
}
</style>
