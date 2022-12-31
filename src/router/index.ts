import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import login from '@/views/login/index.vue'
// import HelloWorld from '../views/login/index.vue'

const routes = [
    {
        path: '/',
        component:login
    }
]

const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(),
    routes,
})

export default router;

