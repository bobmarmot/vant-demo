import Vue from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import router from './router/index'
import store from './store/index'
import '../plugins/vant.js'
import axios from 'axios'
// 自定义的封装组件
import mbx from './components/mbx.vue'
// 底部封装的组件
import tab from './components/tab.vue'
// 引入全局样式
import './assets/css/global.css'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('mbx', mbx)
Vue.component('tab', tab)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
