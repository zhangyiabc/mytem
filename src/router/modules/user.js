import Layout from '@/layout'
const userRouter = {

  path: '/user',
  component: Layout,
  name: 'User',
  meta: { title: '用户管理', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'userList',
      name: 'UserList',
      component: () => import('@/views/user/userList.vue'),
      meta: { title: '用户列表' }
    }
  ]

}

export default userRouter
