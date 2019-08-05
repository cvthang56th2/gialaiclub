import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from '@/modules/core/lazyLoading'
import news from '@/modules/news/router'

const menus = [
  news
]

Vue.use(Router)

export default new Router({
  mode: process && process.env && process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: lazyLoading('views/Home'),
      meta: {
        title: 'Home',
        activeMenu: 'dashboard'
      }
    },
    {
      name: 'not_found',
      path: '/404',
      component: lazyLoading('modules/core/components/not-found'),
      meta: {
        auth: false,
        title: 'Not Found'
      }
    },
    {
      name: 'access_denied',
      path: '/403',
      component: lazyLoading('modules/core/components/access-denied'),
      meta: {
        auth: false,
        title: 'Denied Permission'
      }
    },
    ...generateRoutesFromMenu(menus),
    {
      path: '*',
      redirect: {
        name: 'not_found' // getDefaultRoute(menus).name
      }
    }
  ]
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
