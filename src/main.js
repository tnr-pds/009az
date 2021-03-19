import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCYvOXVrBmHgHMHNYF1CQhVB4dmvWLSYyc",
    authDomain: "aodzi-8e513.firebaseapp.com",
    projectId: "aodzi-8e513",
    storageBucket: "aodzi-8e513.appspot.com",
    messagingSenderId: "517454627939",
    appId: "1:517454627939:web:682cd3681ca9ae4f756456",
    measurementId: "G-2PN93T3LWL"
  }
  firebase.initializeApp(firebaseConfig)
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')