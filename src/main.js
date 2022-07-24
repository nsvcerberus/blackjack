import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/reset.css'
import './css/fonts.css'
import './css/styles.css'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

//Vue.config.productionTip = false