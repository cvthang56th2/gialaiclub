import lazyLoading from '@/modules/core/lazyLoading'

export default {
  name: 'newspage',
  meta: {
    title: 'news list'
  },
  children: [
    {
      name: 'news_list',
      path: '/admin/news',
      component: lazyLoading('news/components/list'),
      meta: {
        title: 'news list',
        layout: 'admin'
      },
    }, {
      name: 'edit_news',
      path: '/admin/news/:id',
      component: lazyLoading('news/components/detail'),
      meta: {
        title: 'Edit news',
        layout: 'admin'
      },
    }
  ]
}
