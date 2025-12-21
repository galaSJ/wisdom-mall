import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Myorder from '@/views/myorder'
import Search from '@/views/search'
import SearchList from '@/views/search/SearchList'
import Pay from '@/views/pay'
import Prodetail from '@/views/prodetail'
import Cart from '@/views/layout/Cart.vue'
import Category from '@/views/layout/Category.vue'
import User from '@/views/layout/User.vue'
import Home from '@/views/layout/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 一级路由配置
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/user',
        component: User
      }

    ]
  },
  {
    path: '/myorder',
    component: Myorder
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/searchList',
    component: SearchList
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    // 详情需要传入商品id
    path: '/prodetail/:id',
    component: Prodetail
  }
]

const router = new VueRouter({
  routes
})

export default router
