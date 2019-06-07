<template>
	<div id="phone">
		<p>{{name}}</p>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from '../../lib/axios';
	export default{
		data(){
			return{
				name:'手机',
				goodslist:[]
			}
		},
		
	}
</script>
<style scoped>
	@import "../../../public/iconfont/iconfont.css";</style>
<style>
	
</style>