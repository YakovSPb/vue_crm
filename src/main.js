import Vue, { createApp } from 'vue'
import useVuelidate from '@vuelidate/core'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';
import { createStore } from 'vuex'

firebase.initializeApp({
  apiKey: "AIzaSyBGo2om0Do4DV2lv3ST7nSZykPq72zrtG4",
  authDomain: "crm-vue-b01c1.firebaseapp.com",
  projectId: "crm-vue-b01c1",
  storageBucket: "crm-vue-b01c1.appspot.com",
  messagingSenderId: "509891980656",
  appId: "1:509891980656:web:0e4ca39115e73f492633b5",
  measurementId: "G-Y1Y90T14VB"
});

export let app 

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(store).use(router).use(messagePlugin).mount('#app')
  }
});
