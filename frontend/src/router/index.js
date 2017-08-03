import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/user/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
