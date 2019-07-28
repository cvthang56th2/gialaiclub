export default ({ store, route, redirect }) => {
  // Check if user is connected first
  // if (!(store.getters['user/item'] && store.getters['user/item'].isAuthenticated)) return redirect('/admin/login')

  // // Get authorizations for matched routes (with children routes too)
  // const authorizationLevels = route.meta.map((meta) => {
  //   if (meta.auth && typeof meta.auth.authority !== 'undefined') { return meta.auth.authority }
  //   return 0
  // })
  // // Get highest authorization level
  // const highestAuthority = Math.max.apply(null, authorizationLevels)

  // if (Number(store.getters['user/item'] && store.getters['user/item'].authority) < highestAuthority) {
  //   throw new Error({
  //     statusCode: 401,
  //     message: 'lalalalala.'
  //   })
  // }
}
