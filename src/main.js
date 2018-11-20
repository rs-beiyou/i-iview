import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from './libs/storage'
import http from './libs/http'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.prototype.$storage = storage
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
