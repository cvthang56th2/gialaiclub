
const getLoading = function (state, cur, rootState) {
  // console.log('state', state, cur, rootState)
  return rootState.cores.isLoading
}
const tagInfo = state => state.tagInfo

const getItems = state => state.items

const getItem = state => state.item

export default {
  items: getItems,
  isLoading: getLoading,
  item: getItem,
  tagInfo
}
