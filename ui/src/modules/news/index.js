import actions from './store/actions'
import getters from './store/getters'
import mutations from './store/mutations'

const state = {
  items: [],
  item: null,
  tagInfo: {}
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
