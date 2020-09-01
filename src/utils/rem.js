;(function (n) {
  const e = n.document
  const t = e.documentElement
  const i = +process.env.VUE_APP_CLIENT_WIDTH
  const d = i / 100
  const o = 'orientationchange' in n ? 'orientationchange' : 'resize'
  const a = function () {
    var n = t.clientWidth || 320; n > i && (n = i)
    t.style.fontSize = n / d + 'px'
  }
  // eslint-disable-next-line no-unused-expressions
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener('DOMContentLoaded', a, !1))
}(window))
