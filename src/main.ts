import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter}  from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Frank },
        { path:'/Frank2', component : Frank2 }
    ]

})


// createApp(App).mount('#app') 

const app = createApp(App)
app.use(router)  //创建router    一行代码变三行
app.mount('#app')

