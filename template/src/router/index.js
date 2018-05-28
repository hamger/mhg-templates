import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: function (resolve) {
        require(['@/pages/ModuleA/Page/Page'], resolve)
      }
    },
    {
      path: '/ModuleA/Page',
      name: 'page',
      component: function (resolve) {
        require(['@/pages/ModuleA/Page/Page'], resolve)
      }
    },
    {
      path: '/ModuleB/Page2',
      name: 'page2',
      component: function (resolve) {
        require(['@/pages/ModuleB/Page2/Page2'], resolve)
      }
    },
    {
      path: '/ModuleB/Page3',
      name: 'page3',
      component: function (resolve) {
        require(['@/pages/ModuleB/Page3/Page3'], resolve)
      }
    },
  ]
})
