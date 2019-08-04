import router from '@/modules/core/router'

const CORE_LIST = (state, cores) => {
  state.cores = cores
}

const SET_LOADING = (state, isLoading) => {
  state.cores.isLoading = isLoading
  if (!isLoading) {
    state.cores.progress = 0
  }
}

const PROGRESS = (state, percent) => {
  state.cores.progress = percent
}

const REFRESH = (state) => {
  state.cores.refresh = Date.now()
}

const NOTIFY = (state, notify) => {
  let { type } = notify

  if (type) {
    notify.action = `show${String(type).charAt(0).toUpperCase()}${type.slice(1)}Msg`
  }

  state.cores.notify = notify
}

const GOTO = (state, path) => {
  router.push(`${path}`)
}

export default {
  CORE_LIST,
  SET_LOADING,
  PROGRESS,
  REFRESH,
  NOTIFY,
  GOTO
}
