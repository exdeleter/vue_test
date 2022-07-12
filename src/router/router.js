import MainPage from "@/pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/pages/PostPage/PostPage.vue";
import AboutPage from "@/pages/AboutPage/AboutPage.vue";
import PostIdPage from "@/pages/PostIdPage/PostIdPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router