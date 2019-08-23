import lazyLoading from '@/modules/core/lazyLoading'

export default {
  name: 'client-page',
  meta: {
    title: 'client page'
  },
  children: [
    {
      name: 'client_home',
      path: '/',
      component: lazyLoading('modules/client/components/index'),
      meta: {
        title: 'client home',
        layout: 'client'
      }
    }
  ]
}
