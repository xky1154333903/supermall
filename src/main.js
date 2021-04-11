import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import FastClick from "fastclick"
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'

Vue.use(toast)

FastClick.attach(document.body)

Vue.prototype.$bus = new Vue()

Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
