import Vue, { createApp } from 'vue'
import useVuelidate from '@vuelidate/core'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

export const app = createApp(App).use(store).use(router).use(messagePlugin).mount('#app')

