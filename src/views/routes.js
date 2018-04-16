import index from '@/views/index'
import login from '@/views/login'
export default [
  {
    path: '/',
    name: 'index',
    component: index
  },
  ...login
]
