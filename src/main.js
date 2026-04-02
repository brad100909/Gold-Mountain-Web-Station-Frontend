import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './router'

import './assets/main.css'

import i18n from './i18n'
import { createGtag } from 'vue-gtag'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createGtag({ tagId: 'G-R7C65VEN92' }), router)

app.mount('#app')
