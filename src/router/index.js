import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Myorder from '@/views/myorder'
import Search from '@/views/search'
import SearchList from '@/views/search/SearchList'
import Pay from '@/views/pay'
import Prodetail from '@/views/prodetail'

Vue.use(VueRouter)

const routes = [
  // 一级路由配置
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout
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
