<template>
	<div id="sort">
		<h1>{{name}}</h1>
		<ul>
			<router-link to="/phone/1" tag='li'>手机</router-link>
			<router-link to="/computer/2" tag='li'>电脑</router-link>
		</ul>
		<transition mode='out-in'>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'分类'
			}
		}
	}
</script>

<style>
	.v-enter,.v-leave-to{
		opacity: 0;
		transform: translateX(140px);
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.5s ease;
	}
</style>