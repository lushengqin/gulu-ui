import './assets/gulu.scss';
import './index.scss';
import { createApp } from 'vue'
import App from './App.vue'
import './iconfont.js'

import { router } from './router/router'
import 'github-markdown-css'



const app = createApp(App)
app.use(router)
app.mount('#app')
