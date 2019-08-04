
const SAVE = (state, item) => (state.item = item)

const GET_ITEM = (state, item) => (state.item = item)

const GET_ITEMS = (state, items) => (state.items = items)

const TAGINFO = (state, info) => (state.tagInfo = info)

const CHANGE_STATUS = (state, data) => {
  let {_id, status} = data
  for (let el of state.items) {
    if (_id === el._id) {
      el.status = status
      break
    }
  }
}

export default {
  SAVE,
  GET_ITEM,
  GET_ITEMS,
  CHANGE_STATUS,
  TAGINFO
}
