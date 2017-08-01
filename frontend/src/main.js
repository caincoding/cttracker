// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'

// imports needed for vue-material to work correctly
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/vue-material.js'

Vue.config.productionTip = false

Vue.use(VueMaterial)

// set default vue-material theme
Vue.material.registerTheme('default', {
  primary: {
    color: 'blue',
    hue: '700'
  },
  accent: 'red',
  warn: 'red',
  background: 'grey'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
