import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import './axios'

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
