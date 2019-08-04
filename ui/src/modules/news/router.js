import lazyLoading from '@/modules/core/lazyLoading'

export default {
  name: 'newspage',
  meta: {
    title: 'news list'
  },
  children: [
    {
      name: 'news_list',
      path: '/news',
      component: lazyLoading('news/components/list'),
      meta: {
        title: 'news list'
      }
    }, {
      name: 'edit_news',
      path: '/news/:id',
      component: lazyLoading('news/components/detail'),
      meta: {
        title: 'Edit news'
      }
    }
  ]
}
