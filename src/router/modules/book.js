import Layout from '@/layout'
const bookRouter = {

  path: '/book',
  component: Layout,
  name: 'Book',
  meta: { title: '文章管理', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'bookList',
      name: 'BookList',
      component: () => import('@/views/book/bookList.vue'),
      meta: { title: '文章列表' }
    },
    {
      path: 'bookDetail',
      name: 'BookDetail',
      component: () => import('@/views/book/bookDetail.vue'),
      meta: { title: '文章详情' }
      // hidden: true
    }
  ]

}

export default bookRouter
