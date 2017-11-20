import Vue from 'vue'
import Router from 'vue-router'
import HostsInfo from '@/components/nodes/hostsInfo'
import Topology from '@/components/topology'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HostsInfo',
      component: HostsInfo
    },
    {
      path: '/topology',
      name: 'topology',
      component: Topology
    }
  ]
})
