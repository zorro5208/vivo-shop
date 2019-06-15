import Vue from 'vue'
import Home from './components/Home.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import router from './router'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import LyTab from 'ly-tab'


Vue.use(LyTab)
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(Home),

})