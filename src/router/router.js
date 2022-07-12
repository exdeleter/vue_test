import MainPage from "@/pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/pages/PostPage/PostPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router