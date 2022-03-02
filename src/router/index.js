import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '@/views/loginPage/index.vue'
import homePage from '@/views/homePage/index.vue'

Vue.use(VueRouter)

const routes = [
  {
  path: '/login',
  name: 'Login',
  component: loginPage
},

{
  path: '/',
  redirect: '/login',
},

{
  path: '/home',
  name: 'Home',
  component: homePage
},
{
  path: '/home',
  redirect: '/home',
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
