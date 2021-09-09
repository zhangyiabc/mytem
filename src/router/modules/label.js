import Layout from '@/layout'
const labelRouter = {

  path: '/label',
  component: Layout,
  name: 'Label',
  meta: { title: '标签管理', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'addLabel',
      name: 'AddLabel',
      component: () => import('@/views/label/labelList.vue'),
      meta: { title: '添加标签' }
    },
    {
      path: 'updateLabel',
      name: 'UpdateLabel',
      component: () => import('@/views/label/labelList.vue'),
      meta: { title: '修改标签' }

    }
  ]

}

export default labelRouter
