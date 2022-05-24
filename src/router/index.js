import { createRouter, createWebHistory } from 'vue-router'
import Home3 from '../components/Home2.vue'

const routes = [
    { path: '/gameinfo', name: 'Gameinfo' ,component: () => import('../components/view-gameinfo/index.vue') },
    {
        path:'/',
        name: 'Home',
        component: Home3,
    },
]




export default createRouter({
    history: createWebHistory('/demo/'), 
    // buil加上 /跟目錄
    routes,
})