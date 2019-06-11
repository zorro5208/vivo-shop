import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Search from './components/Search.vue'
import Classify from './views/Classify.vue'
import Detail from './views/detail.vue'
import Cart from './views/Cart.vue'
Vue.use(VueRouter)


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '/', redirect:'/index' },//redirect重定向
  { path: '/index', component: Index },
  { path: '/Classify', 
		  component: Classify, 
		  //路由嵌套
//		  children:[
//		  		{ path: 'phone/:id', component: phone },
//		  		{ path: 'computer/:id', component: computer }
//		  ]
	},
	{ path: '/cart', component: Cart },
	{ path: '/search', component: Search },
	{ path: '/detail', component: Detail }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass :'mui-active'
})
