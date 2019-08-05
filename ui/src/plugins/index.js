/* vu.vo@carbon8.com File Register Plugin */
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueCookie from 'vue-cookie'
import VueLocalStorage from 'vue-localstorage'
import AppPlugin from './appPlugin'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast' // https://github.com/dolce/iziToast

/* vue-quill-editor */
import VueQuillEditor from 'vue-quill-editor' // https://github.com/surmon-china/vue-quill-editor
/* Require styles */
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
/* vue-quill-editor */

// import { Datetime } from 'vue-datetime'
// import 'vue-datetime/dist/vue-datetime.css'

import 'izitoast/dist/css/iziToast.min.css'

function toast ({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning'
  timeout = 5000
  return iziToast[type]({ title, message, timeout })
}

// Vue.component('datetime', Datetime)

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
Vue.use(VueNotifications, options)
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })
Vue.use(AppPlugin)
Vue.use(VueCookie)
// Vue.use(FullCalendar)
Vue.use(VueQuillEditor)
Vue.use(VueLocalStorage)
