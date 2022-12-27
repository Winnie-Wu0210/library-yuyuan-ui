import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: '',
        component: () => import('./pages/home/index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./pages/home/index.vue')
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: () => import('./pages/swiper/index.vue')
    },
    {
        path: '/progress',
        name: 'progress',
        component: () => import('./pages/progress/index.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
