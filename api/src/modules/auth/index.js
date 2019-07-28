import authRoutes from './route/index'

exports.register = (server, options) => {
  /* Register router */
  server.route(authRoutes)
}

exports.name = 'auth'