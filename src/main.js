import Vue from 'vue'
import App from './App.vue'
import DdShare from './dd-share'
Vue.use(DdShare)

new Vue({
  el: '#app',
  render: h => h(App)
})
