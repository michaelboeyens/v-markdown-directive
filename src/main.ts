import { createApp } from 'vue'
import App from './App.vue'
import vmarkdown from './plugins/v-markdown'

import './assets/main.css'

const app = createApp(App)

app.use(vmarkdown)

app.mount('#app')
