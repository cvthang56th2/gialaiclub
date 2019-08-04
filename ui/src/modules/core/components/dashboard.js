export default {
  name: 'dashboard',
  created () {
    this.$store.commit('SET_LOADING', false)
  }
}
