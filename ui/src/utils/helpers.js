import _ from 'lodash'
import moment from 'moment'

let globalCommit
let globalState

const getState = () => {
  if (globalState) {
    return globalState
  }
  let { state } = require('@/modules/core').default
  globalState = state
  return state
}

const getCommit = () => {
  if (globalCommit) {
    return globalCommit
  }
  let {commit} = require('@/modules/core').default
  globalCommit = commit
  return commit
}

const errorNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'error' }), {
    root: true
  })
}

const successNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'success' }), {
    root: true
  })
}

const warnNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'warn' }), {
    root: true
  })
}

const infoNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'info' }), {
    root: true
  })
}

// Commit SET_LOADING
const setLoading = (value = true) => {
  let commit = getCommit()

  if (value) {
    return commit('SET_LOADING', value, { root: true })
  }

  return setTimeout(() => {
    commit('SET_LOADING', value, { root: true })
  }, 500)
}

// Commit to core module
const rootCommit = (action = '', data) => {
  let commit = getCommit()
  return commit(action, data, { root: true })
}

const progressLoading = progress => rootCommit('PROGRESS', Math.floor((progress.loaded / progress.total) * 100))

const apiErrorMessage = response => {
  try {
    if (response && typeof response === 'object') {
      return (response.data && (response.data.message || response.data.error || JSON.stringify(response.data, null, 2))) || response.data || response.message || response
    }

    return typeof response === 'string' ? response : JSON.stringify(response, null, 2)
  } catch (error) {
    return String(response)
  }
}
const scrollToTop = (el, options = { center: 'center' }) => el.scrollIntoView(options)

const processFormData = data => {
  let sendData = new FormData()
  for (let key of Object.keys(data)) {
    if (data[key] !== undefined) {
      if (Array.isArray(data[key])) {
        for (let value of data[key]) {
          sendData.append(`${key}`, value)
        }
      } else {
        sendData.append(key, data[key])
      }
    }
  }

  return sendData
}

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const base64ToBlob = (base64, mime) => {
  mime = mime || ''
  let sliceSize = 1024
  let byteChars = window.atob(base64)
  let byteArrays = []

  for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
    let slice = byteChars.slice(offset, offset + sliceSize)

    let byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    let byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: mime })
}

const getFileInfo = file => {
  return new Promise((resolve, reject) => {
    if (file instanceof File) {
      EXIF.getData(file, function () {
        resolve(this)
      })
    } else {
      reject(new Error('"file" Must be a file instance'))
    }
  })
}

const loadImageBase64 = file => {
  return new Promise(async (resolve, reject) => {
    try {
      let { exifdata } = await getFileInfo(file)
      loadImage(await getBase64(file), img => {
        let canvas = loadImage.scale(img, { orientation: exifdata.Orientation, canvas: true })
        let base64 = canvas.toDataURL(file.type)
        resolve(base64)
      })
    } catch (error) {
      reject(error)
    }
  })
}

function cleanParams (params, result) {
  result = typeof result === 'object' ? result : {}
  if (params && typeof params === 'object') {
    for (let key in params) {
      if (params.hasOwnProperty(key) && params[key]) {
        if (typeof params[key] === 'object') {
          result[key] = cleanParams(params[key], isArray(params[key]) ? [] : {})
        } else {
          result[key] = typeof params[key] === 'string' ? params[key].split(' ') : params[key]
        }
      }
    }
  }

  return result
}

const tempDay = () => moment().format('MMM-DD-YYYY')

const sleep = time => new Promise(resolve => setTimeout(resolve, time))
const isArray = arr => Array.isArray(arr)
const isObject = obj => obj instanceof Object && !Array.isArray(obj)
const ensureArray = (arr, defaultValue) => isArray(arr) ? arr : isArray(defaultValue) ? defaultValue : []
const ensureObject = (obj, defaultValue) => isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {}
const upperFirstLetter = string => String(string).charAt(0).toUpperCase() + String(string).slice(1)

function formatDate (date, format, timeZone) {
  if ([ 'boolean', 'undefined' ].indexOf(typeof date) === -1 && (!Number(date) || Number(date) > 24339600000)) {
    try {
      let tmpDate = String(timeZone).match(/utc/gmi) ? moment.utc(date) : new Date(date)

      if (date && String(tmpDate) !== 'Invalid Date') {
        format = format || 'MMM DD, YYYY'
        return String(timeZone).match(/utc/gmi) ? moment.utc(date).format(format) : moment(date).format(format)
      }
    } catch (error) {
    }
  }

  return date
}

function toTitleCase (str = '') {
  str = str.toLowerCase().split(' ')
  if (str.length > 0) {
    str = str.map(s => {
      s = s.charAt(0).toUpperCase() + s.slice(1)
      return s
    })
    return str.join(' ')
  }
  return str
}

function camelcaseToString (string) {
  return String(string)
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, str => {
      return str.toUpperCase()
    })
}

const allTrim = string => {
  if (typeof string !== 'string') {
    string = String(string)
  }

  return string.trim().replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '')
}

const uppercase = string => {
  if (typeof string === 'string') {
    return string.toUpperCase()
  }
  return string
}

const lowerCase = string => {
  if (typeof string === 'string') {
    return string.toLowerCase()
  }

  return string
}

function charAt (string, index = 0) {
  if (!string || typeof string !== 'string') {
    return ''
  }
  return string.charAt(index)
}

const sortCallBack = (keyString, asc = true, type, getValueFunction) => {
  return function (item1, item2) {
    let compareValue1 = item1
    let compareValue2 = item2
    if (keyString) {
      let keys = keyString.split('.')
      for (let key of keys) {
        if (compareValue1 && (compareValue1[key] || typeof compareValue1[key] === 'boolean')) {
          compareValue1 = compareValue1[key]
        }
        if (compareValue2 && (compareValue2[key] || typeof compareValue2[key] === 'boolean')) {
          compareValue2 = compareValue2[key]
        }
      }
    }

    if (typeof getValueFunction === 'function') {
      compareValue1 = getValueFunction(compareValue1)
      compareValue2 = getValueFunction(compareValue2)
    }

    switch (type) {
      case 'number':
      case 'Number':
        compareValue1 = Number(compareValue1)
        compareValue2 = Number(compareValue2)
        break
      case 'string':
      case 'String':
        compareValue1 = lowerCase(compareValue1)
        compareValue2 = lowerCase(compareValue2)
        break
    }

    if (asc) {
      return compareValue1 > compareValue2 ? 1 : compareValue1 < compareValue2 ? -1 : 0
    }
    return compareValue1 < compareValue2 ? 1 : compareValue1 > compareValue2 ? -1 : 0
  }
}

function filterSeal (str) {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  // str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-")
  /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
  // str= str.replace(/-+-/g,"-") //thay thế 2- thành 1-
  // str = str.replace(/^\-+|\-+$/g, '')
  // cắt bỏ ký tự - ở đầu và cuối chuỗi
  return str
}

const getAgeFromBirthDate = birthday => {
  let diff = moment.preciseDiff(moment(birthday).format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), true)
  return diff.years
}

const getAgeText = birthday => {
  let diff = moment.preciseDiff(moment(birthday).format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), true)

  if (diff.years > 0) {
    return diff.years + ` year${diff.years > 1 ? 's' : ''} old`
  }

  if (diff.months > 0) {
    return diff.months + ` month${diff.months > 1 ? 's' : ''} old`
  }

  if (diff.days > 0) {
    return diff.days + ` day${diff.days > 1 ? 's' : ''} old`
  }

  return ''
}

function stringMaxLength (string = '', max = 100) {
  if (typeof max !== 'number' || isNaN(max)) {
    throw new Error('Max length of string invalid')
  }

  if (typeof string === 'string') {
    return string.length <= max ? string : string.substring(0, max) + '...'
  }
}

const cleanFileName = fileName => String(fileName).replace(/[^\w\s]| /gm, '-')

export {
  isObject,
  isArray,
  ensureArray,
  ensureObject,
  getBase64,
  base64ToBlob,
  getFileInfo,
  loadImageBase64,
  formatDate,
  getState,
  errorNotify,
  successNotify,
  warnNotify,
  infoNotify,
  setLoading,
  rootCommit,
  progressLoading,
  apiErrorMessage,
  scrollToTop,
  getAgeFromBirthDate,
  getAgeText,
  processFormData,
  sleep,
  allTrim,
  uppercase,
  lowerCase,
  upperFirstLetter,
  toTitleCase,
  sortCallBack,
  filterSeal,
  camelcaseToString,
  stringMaxLength,
  cleanParams
}

export default {
  isObject,
  isArray,
  ensureArray,
  ensureObject,
  getBase64,
  base64ToBlob,
  getFileInfo,
  loadImageBase64,
  formatDate,
  getState,
  errorNotify,
  successNotify,
  warnNotify,
  infoNotify,
  setLoading,
  rootCommit,
  progressLoading,
  apiErrorMessage,
  scrollToTop,
  getAgeFromBirthDate,
  getAgeText,
  processFormData,
  sleep,
  allTrim,
  uppercase,
  lowerCase,
  upperFirstLetter,
  toTitleCase,
  sortCallBack,
  filterSeal,
  camelcaseToString,
  stringMaxLength,
  cleanParams
}
