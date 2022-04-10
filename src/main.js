import Vue, { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Loader from './components/app/Loader'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyBGo2om0Do4DV2lv3ST7nSZykPq72zrtG4",
  authDomain: "crm-vue-b01c1.firebaseapp.com",
  projectId: "crm-vue-b01c1",
  storageBucket: "crm-vue-b01c1.appspot.com",
  messagingSenderId: "509891980656",
  databaseURL: "https://crm-vue-b01c1-default-rtdb.europe-west1.firebasedatabase.app",
  appId: "1:509891980656:web:0e4ca39115e73f492633b5",
  measurementId: "G-Y1Y90T14VB"
});

export let app 

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(store).use(router).use(messagePlugin).component('Loader', Loader).mount('#app')
  }
});

