/**
* File name: service.js
* Created by Visual studio code
* User: Danh Le / danh.le@9thwonder.com
* Date: 2018-12-11 07:59:20
*/
import Axios from 'axios'
import { processFormData, progressLoading } from '@/utils/helpers'

const upload = (data, progress) => {
  let cancel
  let sendData = processFormData(data)
  return Object.assign(Axios.post(`${window.apiUrl}/upload`, sendData, {
    withCredentials: true,
    onUploadProgress: typeof progress === 'function' ? progress : progressLoading,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    cancelToken: new Axios.CancelToken(function executor (c) {
      // An executor function receives a cancel function as a parameter
      cancel = c
    })
  }), { cancel })
}

const getStatic = (path, progress) => Axios.get(path, {
  responseType: 'arraybuffer',
  onDownloadProgress: typeof progress === 'function' ? progress : progressLoading
})

export default {
  upload,
  getStatic
}
