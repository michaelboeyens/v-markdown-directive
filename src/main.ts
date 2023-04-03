import { createApp } from 'vue'
import App from './App.vue'
import vmarkdown from './plugins/v-markdown'

const app = createApp(App)

app.use(vmarkdown)

app.mount('#app')
