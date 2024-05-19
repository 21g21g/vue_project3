import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from "./components/About.vue"
import Notfound from "./components/Notfound.vue"
const app=createApp(App)
const pinia=createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/:catchAll(.*)",
      component: Notfound,
    },
  ],
});
app.use(router)
app.use(pinia)
app.mount('#app')

// createApp(App).mount('#app')
