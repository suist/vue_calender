import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Theme from '../components/Theme.vue'
import Calender from '../components/Calender.vue'

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
    path: '/calender',
    name: 'calender',
    component : Calender
  
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
