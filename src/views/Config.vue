<template>
  <div>
    <div class="header_box">
      <span class="back" @click="back">返回</span>
      <span class="name">配置页</span>
    </div>
    <div class="config_box">
      <div class="config_list" v-for="item in configData" :key="item.name">
        <span class="config_text">{{item.text}}</span>
        <div class="config_btn">
          <switch-btn :isOn="item.choose" :switchName="item.name" @changeOn="changeOn"></switch-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'config',
  data () {
    return {
      configData: [
        {
          name: 'console',
          text: '是否开启vConsole调试',
          choose: false
        }
      ]
    }
  },
  methods: {
    changeOn (e) {
      const switchIndex = this.configData.findIndex((item) => {
        return item.name === e.name
      })
      let nowState = this.configData[switchIndex].choose
      // 开始vConsole
      if (e.name === 'console') {
        const VcStyle = document.getElementById('__vconsole')
        if (nowState) {
          VcStyle.style.display = 'none'
          nowState = false
          this.$toast('vConsole已关闭')
        } else {
          VcStyle.style.display = 'block'
          nowState = true
          this.$toast('vConsole已开启')
        }
        this.$set(this.configData[switchIndex], 'choose', nowState)
      }
    },
    back () {
      this.$router.goBack(-1)
    }
  },
  created () {
    const config = JSON.parse(this.$session.get('configData'))
    if (config) {
      this.configData = config
    } else {

    }
  },
  beforeDestroy () {
    this.$session.set('configData', JSON.stringify(this.configData))
  }
}
</script>

<style lang="scss" scoped>
.header_box {
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  color: #fff;
  font-size: .32rem;
  background: #0e8ce8;
  text-align: center;
  position: relative;
  span {
    display: inline-block;
    line-height: .8rem;
    &.back {
      position: absolute;
      left: 0.2rem;
      top: 0;
      font-size: .28rem;
    }
  }
}
.config_box {
  width: 100%;
  margin: 0 auto;
  .config_list {
    width: 100%;
    line-height: 1rem;
    height: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    .config_text {
      display: inline-block;
      line-height: 1rem;
      font-size: .32rem;
      margin-left: 0.2rem;
    }
    .config_btn{
      margin-top: 0.25rem;
      margin-right: 0.2rem;
    }
  }
}
</style>
