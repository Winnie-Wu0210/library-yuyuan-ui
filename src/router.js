import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: '',
        component: () => import('./views/home/index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./views/home/index.vue')
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: () => import('./views/swiper/index.vue')
    },
    {
        path: '/progress',
        name: 'progress',
        component: () => import('./views/progress/index.vue')
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('./views/demo/index.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
