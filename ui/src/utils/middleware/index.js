
export default (router) => {
  router.beforeEach(async (to, from, next) => {
    try {
      return next()
    } catch (error) {
      console.log(error, 'error')
      return next()
    }
  })
}
