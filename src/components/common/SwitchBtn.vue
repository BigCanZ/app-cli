<template>
  <div>
    <div class="switch_btn" @click="changeOn" :class="isOn ? 'on':'off'">
      <div class="switch_circle" :class="{right:isOn}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchBtn',
  props: {
    isOn: {
      default: false,
      type: Boolean
    },
    switchName: String
  },
  methods: {
    changeOn () {
      this.$emit('changeOn', { choose: this.isOn, name: this.switchName })
    }
  }
}
</script>

<style lang="scss" scoped>
  .switch_btn {
    // box-sizing: border-box;
    display: block;
    width: 1rem;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .1rem;
    border-radius: .5rem;
    border: 1px solid #ddd;
    transition: background-color 0.3s, border-color 0.3s;
    position: relative;
    &.off {
      background: #fff;
    }
    &.on {
      background: #53D969;
      border-color: #53D969;
    }
    .switch_circle {
      box-shadow: 0px 0px 4px 0px #d9d9d9;
      height: 0.46rem;
      width: 0.46rem;
      position: absolute;
      top: 0.02rem;
      left: 0.02rem;
      border-radius: 50%;
      background-color: #fff;
      border: 0.01rem solid #ddd;
      box-sizing: border-box;
      transition: left 0.3s;
      &.right {
        left: 0.72rem;
      }
    }
  }
</style>
