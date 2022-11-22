import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {createRouter, createWebHashHistory} from 'vue-router'

import home from '@/components/HelloWorld.vue'
import login from '@/components/LoginIng.vue'
import overview from '@/components/OverView.vue'
import comment from '@/components/ComMent.vue'
import error from '@/components/ErrorView.vue'

const routes = [{
    path: '/home', name: 'home', component: home
},{
    path:'/',name:'LoginIng', component: login
},{
    path:'/overview',name:'overview', component: overview
},{
    path:'/comment',name:'comment', component: comment
},{
    path:'/error',name:'error', component: error
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
