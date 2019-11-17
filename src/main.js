// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
import * as Datastore from './utils/datastore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import QuoteView from './components/QuoteView'

Vue.use(VueClipboard)
Vue.use(BootstrapVue)
Vue.component('QuoteView', QuoteView)
Vue.prototype.$datastore = Datastore
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
