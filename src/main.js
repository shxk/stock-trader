import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './filters/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = process.env.VUE_APP_ROOT_API;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')