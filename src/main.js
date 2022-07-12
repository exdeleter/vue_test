import { createApp } from 'vue'
import App from './components/App/App.vue'
import components from '@/components/UI'
import router from "@/router/router";

const app = createApp(App)

//глобальная регистрация компонента
components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')
