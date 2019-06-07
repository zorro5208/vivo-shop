<template>
  <div id="app">
  	<!--头部-->
		<mt-header title='vivo' style="background: #000000;">
			<router-link to="/" slot="left">
				<mt-button icon="search"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<!--内容-->
    	<transition name="router-fade" mode="out-in">
          <router-view style="padding-bottom: 50px"></router-view>
      </transition>
      <!--底部-->
  	<nav class="mui-bar mui-bar-tab">
  		<router-link to="/index" tag='a' class="mui-tab-item">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
  		</router-link>
  		<router-link to="/classify" tag='a' class="mui-tab-item">
					<span class="mui-icon mui-icon-settings"></span>
					<span class="mui-tab-label">分页</span>
  		</router-link>
			<router-link to="/cart" tag='a' class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/index1" tag='a' class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
	export default {
	data() {
		return {
			num: 0,
		}
	},
	//		created(){
	//			console.log(this.$route)
	//		},
	methods: {
		btn(index) {
			this.num = index;
		}
	},
}</script>

<style scoped>
	@import "../../public/iconfont/iconfont.css";</style>
<style scoped>
	/*#footer {
	position: fixed;
	bottom: 0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 60px;
	background: white;
	border-top: 1px solid #CCCCCC;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

#footer .box {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.active {
	color: #5FB878;
}

#footer span {
	text-decoration: none;
	font-weight: bold;
}
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.1s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}*/
</style>