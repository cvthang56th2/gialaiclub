import Vue from 'vue'
import App from './App.vue'
import store from '@/modules/core'
import router from '@/modules/core/router'
import middleware from '@/utils/middleware'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

window.apiUrl = '/api/v1'

Vue.config.productionTip = false

require('./plugins')
middleware(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
