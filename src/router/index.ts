import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/store/:id',
    name: 'DetailsProducts',
    component: () => import('../views/DetailsProducts.vue')
  },
  {
    path: '/instrumentsList',
    name: 'InstrumentsList',
    component: () => import('../views/InstrumentsList.vue')
  },
  {
    path: '/signIn',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
