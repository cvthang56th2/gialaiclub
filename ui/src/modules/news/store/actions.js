/**
* File name: actions.js
* Created by Visual studio code
* User: Danh Le / danh.le@9thwonder.com
* Date: 2018-07-06 08:49:08
*/
import Service from '@/modules/news/service'
import { errorNotify, successNotify, setLoading, rootCommit, apiErrorMessage } from '@/utils/helpers'

const moduleName = 'news'

const getItem = async ({ commit }, { _id }) => {
  setLoading()
  try {
    let { data } = await Service.getItem(_id)
    setLoading(false)
    commit('GET_ITEM', data)
    return data
  } catch (error) {
    setLoading(false)
    errorNotify({
      title: moduleName,
      message: apiErrorMessage(error.response || error)
    })
    throw error
  }
}

const getItems = async ({ commit }, params = {}) => {
  setLoading()
  try {
    let { data } = await Service.getItems(params)
    setLoading(false)
    commit('GET_ITEMS', data.data)
    commit('TAGINFO', {
      countAll: data.countAll,
      countArchive: data.countArchive
    })
    rootCommit('PAGINATION', {
      page: data.current_page,
      length: data.last_page
    })
    return data
  } catch (error) {
    setLoading(false)
    errorNotify({
      title: moduleName,
      message: apiErrorMessage(error.response || error)
    })
    throw error
  }
}

const save = async ({ commit }, payload = {}) => {
  setLoading()
  try {
    let { data } = await Service.save(payload)
    setLoading(false)
    commit('SAVE', data)
    successNotify({
      title: moduleName,
      message: 'Save successfully!'
    })
    return data
  } catch (error) {
    setLoading(false)
    errorNotify({
      title: moduleName,
      message: apiErrorMessage(error.response || error)
    })
    throw error
  }
}

const changeStatus = async ({ commit }, { _id, status }) => {
  setLoading()
  try {
    let { data } = await Service.status([_id], status)
    setLoading(false)
    successNotify({
      title: moduleName,
      message: `news's status has been updated successfully!`
    })
    rootCommit('REFRESH')
    return data
  } catch (error) {
    setLoading(false)
    errorNotify({
      title: moduleName,
      message: apiErrorMessage(error.response || error)
    })
    throw error
  }
}

export default {
  getItems,
  getItem,
  save,
  changeStatus
}
