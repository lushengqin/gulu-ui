import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import Button from '../components/button.vue'
import {createWebHashHistory,createRouter} from 'vue-router'

const history = createWebHashHistory() 
export const router = createRouter({ 
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc,
            children: [
                {
                    path: '/button', component: ButtonDemo
                },
                {
                    path: '/button2', component: Button
                }
            ]
        }
    ],
   

})
router.afterEach(() => {
    // to and from are both route objects.
   console.log('路由切换了')
})