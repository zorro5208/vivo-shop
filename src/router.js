import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Search from './components/Search.vue'
import Classify from './views/Classify.vue'
import Detail from './views/detail.vue'
import Cart from './views/Cart.vue'
import My from './views/My.vue'
import List from './views/list.vue'
import choice from './components/register/choice.vue'
import Register from './components/register/register.vue'
import Login from './components/login/login.vue'
Vue.use(VueRouter)


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '/', redirect:'/index' },//redirect重定向
  	{ path: '/index', component: Index },
  	{ path: '/Classify', component: Classify,},
	{ path: '/cart', component: Cart },
	{ path: '/my', component: My },
	{ path: '/search', component: Search },
	{ name:'detail' , path: '/detail', component: Detail },
	{ path: '/list', component: List },
	{ path: '/choice', component: choice },
	{ name: 'register' , path: '/register', component: Register },
	{ name: 'login' , path: '/login', component: Login },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass :'mui-active'
})
