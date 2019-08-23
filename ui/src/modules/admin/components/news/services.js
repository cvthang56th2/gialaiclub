import Axios from 'axios'

const save = data => Axios.post(`${window.apiUrl}/news`, data, {
  withCredentials: true
})

const getItems = data => Axios.get(`${window.apiUrl}/news`, {
  withCredentials: true
})

const getItem = data => Axios.get(`${window.apiUrl}/news/${data._id}`, data.params, {
  withCredentials: true
})

const remove = _id => Axios.delete(`${window.apiUrl}/news/${_id}`, {
  withCredentials: true
})

export default {
  save,
  getItems,
  getItem,
  remove
}
