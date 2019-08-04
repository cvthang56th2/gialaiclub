// import api from '../_api'

const getCore = (context) => {
}

const setLoading = (context, isLoading) => {
  context.commit('SET_LOADING', isLoading)
}

export default {
  getCore,
  setLoading
}
