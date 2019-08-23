
export default (router) => {
  router.beforeEach(async (to, from, next) => {
    try {
      console.log('to', to)
      console.log('from', from)
      return next()
    } catch (error) {
      console.log(error, 'error')
      return next()
    }
  })
}
