import { createApp } from 'vue'
import App from './components/App/App.vue'
import components from '@/components/UI'

const app = createApp(App)

//глобальная регистрация компонента
components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
