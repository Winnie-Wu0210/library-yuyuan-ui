import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'

import './assets/scss/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
