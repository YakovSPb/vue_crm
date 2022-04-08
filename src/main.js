import { createApp } from 'vue'
import useVuelidate from '@vuelidate/core'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

createApp(App).use(store).use(router, useVuelidate).mount('#app')

