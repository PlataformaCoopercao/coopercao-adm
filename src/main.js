// Polyfills
// import 'es6-promise/auto'
// import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA5cMNy3cpbNf_pj-qq-wCGgR0Rds0Rt38',
  authDomain: 'coopercao-backend.firebaseapp.com',
  databaseURL: 'https://coopercao-backend.firebaseio.com',
  projectId: 'coopercao-backend',
  storageBucket: 'coopercao-backend.appspot.com',
  messagingSenderId: '124584809933'
}
firebase.initializeApp(config)

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
