import Vue from 'vue'
import Router from 'vue-router'
import Quotes from '@/components/Quotes'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quotes',
      component: Quotes
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})
