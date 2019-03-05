import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

Vue.use(VueI18n)
let locale = navigator.language
const i18n = new VueI18n({
  fallbackLocale: 'en',
  locale: locale,
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
