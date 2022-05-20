import { createApp } from 'vue'
import App from './App.vue'
import twind from './configs/twind'
import './index.css'

createApp(App)
  .use(twind)
  .mount('#app')
