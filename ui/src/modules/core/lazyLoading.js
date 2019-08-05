// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
export default name => () => {
  return require.ensure([], require => {
    let component
    try {
      component = require(`@/${name}.vue`)
    } catch (error) {
      component = require(`@/${name}/index.vue`)
    }
    return component
  })
  // if (process.env.NODE_ENV === 'production') {
  //   return import(`modules/${name}${index ? '/index' : ''}.vue`)
  // }

  // if (process.env.NODE_ENV === 'development') {
  //   return require.ensure([], require => {
  //     return require(`modules/${name}${index ? '/index' : ''}.vue`)
  //   })
  // }
}
