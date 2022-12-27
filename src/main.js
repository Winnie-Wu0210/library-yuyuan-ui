import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/scss/index.js'

const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
