<template>
  <div>
    <div class="title">路由基础</div>
    <div class="btn-box">
      <router-link class="btn" to="/">home</router-link>
      <router-link class="btn" to="/about">about</router-link>
      <router-link class="btn" to="/default">defalut</router-link>
    </div>
    <div>
      <div class="title">状态管理</div>
      <span class="count">store demo: {{count}}</span>
      <span class="btn" @click="add">add count</span>
    </div>
    <div>
      <div class="title">防抖与节流</div>
      <span class="count">输出值：{{number}}</span>
      <span class="btn" @click="debounce">防抖</span>
      <span class="btn" @click="throttle">节流</span>
    </div>
    <div>
      <div class="title">通用组件</div>
      <span class="btn" @click="loading">loading</span>
      <span class="btn" @click="toast">toast</span>
      <span class="btn" @click="alert">alert</span>
      <span class="btn" @click="confirm">confirm</span>
    </div>
    <div>
      <div class="title">配置页面示例</div>
      <config-btn>
        <span class="btn">config</span>
      </config-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { _debounce, _throttle } from 'utils/public.js'
export default {
  name: 'Home',
  data () {
    return {
      number: 0
    }
  },
  computed: {
    ...mapGetters(
      ['count']
    )
  },
  methods: {
    add () {
      this.$store.dispatch('count/add')
    },
    debounce: _debounce(function () {
      this.number++
    }, 200),
    throttle: _throttle(function () {
      this.number++
    }, 200),
    loading () {
      this.$loading.show({
        txt: '加载动画'
      })
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    },
    toast () {
      this.$toast('轻提示')
    },
    alert () {
      this.$message({
        type: 'alert',
        message: '警告弹窗',
        callback: () => {
          this.$toast('点击了确定按钮')
        }
      })
    },
    confirm () {
      this.$message({
        type: 'confirm',
        message: '确认弹窗',
        cancel: '不要了',
        confirm: '好的',
        callback: (cb) => {
          if (cb === 'cancel') this.$toast('点击了取消按钮')
          if (cb === 'confirm') this.$toast('点击了确定按钮')
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
