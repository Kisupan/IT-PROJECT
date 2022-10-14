import Vue from 'vue'
import App from './App.vue'
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { createApp } from 'vue'
// const app = createApp(App)
// app.mount('#app')

Vue.prototype.axios = axios
// app.use(ElementPlus)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')