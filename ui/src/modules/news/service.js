import qs from 'qs'
import Axios from 'axios'

const getItems = params => Axios.get(`${window.apiUrl}/news`, {
  params,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  withCredentials: true
})

const getItem = id => Axios.get(`${window.apiUrl}/news/${id}`, {
  withCredentials: true
})

const save = payload => Axios.post(`${window.apiUrl}/news`, payload, {
  withCredentials: true
})

const remove = _ids => Axios.post(`${window.apiUrl}/news/remove`, { _ids }, {
  withCredentials: true
})

const status = (_ids, status) => Axios.put(`${window.apiUrl}/news/status`, { _ids, status }, {
  withCredentials: true
})

export default {
  save,
  getItems,
  remove,
  getItem,
  status
}
