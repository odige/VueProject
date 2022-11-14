import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {createRouter, createWebHashHistory} from 'vue-router'

import home from '@/components/HelloWorld.vue'
import login from '@/components/LoginIng.vue'

const routes = [{
    path: '/', name: 'HelloWorld', component: home
},{
    path:'/login',name:'LoginIng', component: login
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
