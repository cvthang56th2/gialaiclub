import Vue from 'vue'
import Vuex from 'vuex'

/* Core */
import getters from './store/getters'
import mutations from './store/mutations'

/* Modules */

Vue.use(Vuex)

const state = {
  cores: {
    continueLoading: false,
    refresh: Date.now(),
    isLoading: false,
    progress: 0,
    notify: {
      type: 'success',
      action: 'showSuccessMsg',
      title: 'Example title',
      message: 'Example message!'
    },
    layout: 'client',
    development: process && process.env && process.env.NODE_ENV === 'development'
  }
}

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  state,
  mutations,
  modules: {
  }
})

export default store
