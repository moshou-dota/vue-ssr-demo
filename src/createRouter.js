import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import About from './views/about.vue'
import Item from './views/item.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  }
]

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes
  })
}
