import lazyLoading from '@/modules/core/lazyLoading'

export default {
  name: 'admin-page',
  meta: {
    title: 'admin page'
  },
  children: [
    {
      name: 'admin_home',
      path: '/admin',
      component: lazyLoading('modules/admin/components/index'),
      meta: {
        title: 'admin home',
        layout: 'admin'
      }
    },
    {
      name: 'admin_list_news',
      path: '/admin/news',
      component: lazyLoading('modules/admin/components/news/index'),
      meta: {
        title: 'admin list news',
        layout: 'admin'
      }
    },
    {
      name: 'admin_detail_news',
      path: '/admin/news/:id',
      component: lazyLoading('modules/admin/components/news/detail'),
      meta: {
        title: 'admin detail news',
        layout: 'admin'
      }
    }
  ]
}
