<template>
  <div @click="toConfig">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ConfigBtn',
  data () {
    return {
      showConfig: 0
    }
  },
  methods: {
    toConfig () {
      if (this.showConfig < 4) {
        // 记录时间
        if (this.checkTime !== null) {
          const nowTime = new Date().getTime()
          if (nowTime - this.checkTime <= 2000) {
            // 计数器加一
            this.showConfig++
            this.checkTime = nowTime
            // 定时重新开始
            clearTimeout(this.checkTimer)
            this.checkTimer = setTimeout(function () {
              this.showConfig = 0
              this.checkTime = null
            }, 2000)
            if (this.showConfig >= 3 && this.showConfig <= 4) {
              const clickCount = 4 - this.showConfig
              if (clickCount === 0) {
                this.$toast('再次点击，跳转配置页面')
              } else {
                this.$toast('再点击' + clickCount + '次，跳转配置页面')
              }
            } else if (this.showConfig > 4) {
              // 还原状态
              this.showConfig = 0
              this.checkTime = null
            }
          } else {
            this.showConfig = 0
            this.checkTime = new Date().getTime()
          }
        } else {
          this.checkTime = new Date().getTime()
          this.showConfig++
        }
      } else {
        this.showConfig = 0
        this.checkTime = null
        this.$router.push('config')
      }
    }
  }
}
</script>

<style scoped>

</style>
