import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env: 'bertlearning-62870c'
})

const app = new Vue(App)
app.$mount()
