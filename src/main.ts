import './lib/gulu.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './views/iconfont.js'

import { router } from './router/router'




const app = createApp(App)
app.use(router)
app.mount('#app')
