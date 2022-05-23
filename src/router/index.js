import { createRouter, createWebHistory } from 'vue-router'
import gameinfo from '../components/view-gameinfo/index.vue'

const routes = [
    { path: '/gameinfo', name: 'gameinfo' ,component: () => import('../components/view-gameinfo/index.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})