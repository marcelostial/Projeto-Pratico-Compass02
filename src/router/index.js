import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '@/views/loginPage/index.vue'
import homePage from '@/views/homePage/index.vue'

Vue.use(VueRouter)

const routes = [
  {
  path: '/login',
  name: 'Login',
  component: loginPage,
  meta: { title: 'Compass - Login' }
},

{
  path: '/',
  redirect: '/login',
},

{
  path: '/home',
  name: 'Home',
  component: homePage,
  meta: { title: 'Compass - Home' }
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

router.beforeEach((to, from, next)=>{
  if ( to.name === 'home'){
    next({
      path: '/login',
      replace: true
    })
  } else {
    next();
  }
})

router.afterEach((to) =>{
  if (to.meta && to.meta.title){
    document.title = to.meta.title
  }
})

export default router