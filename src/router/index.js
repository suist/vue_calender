import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Theme from '../components/Theme.vue'
import Calender1 from '../components/Calender1.vue'
import Beta from '../components/Theme/Themes.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/theme',
    name: 'theme',
    component : Theme
  
  },
  {
    path: '/calender1',
    name: 'calender1',
    component : Calender1
  
  },
  {
    path: '/beta',
    name: 'beta',
    component : Beta
  
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
