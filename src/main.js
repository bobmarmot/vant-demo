import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../plugins/vant.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
