import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwindcss.css'
// import routes from './routes';
import store from './stores';

const app = createApp(App)

// app.use(routes)
app.use(store)
app.mount('#app')
