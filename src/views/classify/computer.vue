<template>
	<div id="computer">
		<h1>商品详情</h1>
		<p>{{name}}{{$route.params.id}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'电脑'
			}
		}
	}
</script>

<style>
</style>