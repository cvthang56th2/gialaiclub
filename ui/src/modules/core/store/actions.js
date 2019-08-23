// import api from '../_api'

const getCore = (context) => {
}

const setLoading = (context, isLoading) => {
  context.commit('SET_LOADING', isLoading)
}

const setLayout = (context, layout) => {
  context.commit('SET_LAYOUT', layout)
}

export default {
  getCore,
  setLoading,
  setLayout
}
