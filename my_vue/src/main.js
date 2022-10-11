import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

Vue.prototype.axios = axios
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
})
