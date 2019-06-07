import Vue from 'vue'
import Home from './components/Home.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
//import mui from './assets/js/mui.js'
//Vue.prototype.mui=mui;
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
	el:'#app',
	router,
  	render: h => h(Home),
	
})
