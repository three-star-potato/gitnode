import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// axios(
//   {
//     url: 'http://192.168.3.100:60001/sys-manager/node'
//   }).then(res => { console.log(res) })

