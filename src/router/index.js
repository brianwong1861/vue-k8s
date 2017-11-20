import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Foo from '@/components/foo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    }
  ]
})
