import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
// 页面路由

Vue.use(Router)

const demoTemplate = Vue.extend({
  template: `<div>你当前的路径是\{{ $route.path }}</div>`
})

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/',
      redirect: 'home'
    },
    {
      path: 'home',
      component: () => import('@/views/home/Home.vue'),
      name: 'home',
      meta: { title: 'home', icon: 'dashboard', noCache: true }
    }, {
      path: '*',
      component: demoTemplate
    }]
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
