import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Parameters from '../views/parameters/Parameters.vue'
import Systems from '../views/systems/Systems.vue'
import Tools from '../views/tools/Tools.vue'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/parameters',
    name: 'Parameters',
    component: Parameters
  },
  {
    path: '/systems',
    name: 'Systems',
    component: Systems
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
