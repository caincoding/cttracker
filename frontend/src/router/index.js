import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import clientMain from '@/components/ClientMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/client',
      name: 'clientMain',
      component: clientMain
    },
    {
      path: '*',
      name: 'notFound',
      redirect: '/client'
    }
  ]
})
