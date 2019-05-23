import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from './components/HelloWorld.vue'
import MyColorPicker from './components/MyColorPicker.vue'
import SCSS from './components/SCSS-test.vue'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: HelloWorld
  },
  {
    path: '/color-picker',
    component: MyColorPicker
  },
  {
    path: '/scss',
    component: SCSS
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')