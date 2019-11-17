import Vue from 'vue'
import Router from 'vue-router'
import QuotesPage from '@/components/QuotesPage'
import SingleQuotePage from '@/components/SingleQuotePage'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/quotes'
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: QuotesPage
    },
    {
      path: '/quotes/:quoteId',
      name: 'Quote',
      component: SingleQuotePage
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
