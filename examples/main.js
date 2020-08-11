import Vue from 'vue'
import App from './App.vue'
import imgZoom from '../lib'
Vue.config.productionTip = false
Vue.use(imgZoom)
new Vue({
  render: h => h(App),
}).$mount('#app')
