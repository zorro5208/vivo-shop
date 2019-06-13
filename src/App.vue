<template>
  <div id="app">
  	<keep-alive>
    	<router-view></router-view>
  	</keep-alive>
  	<div id="footer">
			<div class="box"  v-for="(val,index) in title" :key='index' @click="btn(index)" :class="num == index? 'active':''">
				<i :class="val.content" class="iconfont"></i>
				<router-link :to="{path:val.path}" tag='span'>{{val.name}}</router-link>
				<!--:to="{path:val.path + `/${index+1}`}"  传id值
						{{$route.params.id}} 获取id值
				-->
			</div>
		</div>
  </div>
</template>

<script>
export default {
    data(){
			return{
				title:[{
					name:'首页',
					path:'/index',
					content: "icon-shouye"
				},{
					name:'分类',
					path:'/classify',
					content: "icon-leimupinleifenleileibie2"
				},{
					name:'购物车',
					path:'/cart',
					content: "icon-gouwuchekong"
				},{
					name:'我的',
					path:'/',
					content: "icon-wodedangxuan"
				}],
				num : 0,
			}
		},
//		created(){
//			console.log(this.$route)
//		},
		methods:{
			btn(index){
				this.num = index;
			}
		},
}
</script>

<style scoped>
	@import "../public/iconfont/iconfont.css";
</style>
<style scoped>
	
	
</style>