// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResourece from 'vue-resource'
import VueMaterial from 'vue-material'

// imports needed for vue-material to work correctly
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/vue-material.js'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueResourece)

// set default vue-material theme
Vue.material.registerTheme('default', {
  primary: {
    color: 'red',
    hue: 'A700'
  },
  accent: {
    color: 'deep-orange',
    hue: '300'
  },
  warn: 'red',
  background: {
    color: 'grey',
    hue: '200'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
