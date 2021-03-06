import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import DialogDemo from '../components/DialogDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import {createWebHashHistory,createRouter} from 'vue-router'

import Intro from '../views/Intro.vue'
import Install from '../views/Install.vue'
import Start from '../views/Start.vue'

const history = createWebHashHistory() 
export const router = createRouter({ 
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc,
            children: [
                {
                    path:'',redirect: '/doc/intro' //默认页面写空 显示button内容
                },
                {
                    path: 'intro', component: Intro
                },
                {
                    path: 'install', component: Install    
                },
                {
                    path: 'start', component: Start
                },
                {
                    path: 'switch', component: SwitchDemo
                },
                {
                    path: 'button', component: ButtonDemo
                },
                {
                    path: 'dialog', component: DialogDemo  
                },
                {
                    path: 'tabs', component: TabsDemo
                }
            ]
        }
    ],
   

})
router.afterEach(() => {
    // to and from are both route objects.
   console.log('路由切换了')
})