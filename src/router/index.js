import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Stocks from '../components/stocks/Stocks'
import Portfolio from '../components/portfolio/Portfolio'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
