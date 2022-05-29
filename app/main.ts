import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import 'uno.css'

createApp(App)
  .use(router)
  .mount('#app')
