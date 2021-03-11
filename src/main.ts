import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter}  from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path:'/Doc', component : Doc }
    ]

})


// createApp(App).mount('#app') 

const app = createApp(App)
app.use(router)  //创建router    一行代码变三行
app.mount('#app')

