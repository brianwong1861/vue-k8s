import Vue from 'vue'
import Router from 'vue-router'
import Hosts from '@/components/hosts'
import Topology from '@/components/topology'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hosts',
      component: Hosts
    },
    {
      path: '/topology',
      name: 'topology',
      component: Topology
    }
  ]
})
