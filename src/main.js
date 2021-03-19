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
    apiKey: "AIzaSyDPBrFP8KJxF6zAwlnREyzP0rACGVo_dkM",
    authDomain: "login-473f8.firebaseapp.com",
    projectId: "login-473f8",
    storageBucket: "login-473f8.appspot.com",
    messagingSenderId: "918190999043",
    appId: "1:918190999043:web:65a92e5393c7ae0dfe3036",
    measurementId: "G-CBT02SDMN7"
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