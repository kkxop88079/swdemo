import { createApp } from 'vue'
import App from './App.vue'
import twind from './configs/twind'
import router from './router'

import './index.css'

createApp(App)
  .use(twind)
  .use(router)
  .mount('#app')
  
  router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
  });