import { createApp } from 'vue'
import { App } from './App'
import { routes } from './router/routes'
import { createRouter } from 'vue-router'
import { history } from './router/history'


const router = createRouter({ history, routes })
const app = createApp(App)

app.use(router)
app.mount('#app')
