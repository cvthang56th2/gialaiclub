export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    // do something to validate
    console.log(to)
    next()
  })

  app.router.afterEach((to, from) => {
    // do something to validate
    console.log(to)
  })
}
