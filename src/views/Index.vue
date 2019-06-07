<template>
	<div id="main">
		<!--轮播图-->
		<div id="banner">
			<mt-swipe :auto="3000">
				<mt-swipe-item><img class="img01" src="../assets/banner_1.jpg" /></mt-swipe-item>
				<mt-swipe-item><img class="img01" src="../assets/banner_2.jpg" /></mt-swipe-item>
				<mt-swipe-item><img class="img01" src="../assets/banner_3.jpg" /></mt-swipe-item>
				<mt-swipe-item><img class="img01" src="../assets/banner_4.jpg" /></mt-swipe-item>
				<mt-swipe-item><img class="img01" src="../assets/banner_5.jpg" /></mt-swipe-item>
			</mt-swipe>
		</div>
		<!--导航-->
		<!--<div id="nav">
			<img src="../assets/img/all.svg"/>
			<ul>
				<li v-for="(good,index) in typeList" :key='index'>
					<a href="#"><img :src="good.url"/></a>
					<p>{{good.name}}</p>
				</li>
			</ul>
		</div>-->
		<!--商品列表-->
		<!--<div id="goods">
			<h5>体闲零食</h5>
			<ul>
				<li v-for="(shop,index) in goodslist[0].goodslist0" :key='index'>
					<a href="#">
						<img :src="../assets/shop.img"/>
					</a>
					<p>{{shop.name}}</p>
					<p><span id="price">￥{{shop.price}}</span><span id="icon"><i class="iconfont icon-gouwuchekong"></i></span></p>
				</li>
				
			</ul>
			<h5>精品服饰</h5>
			<ul>
				<li v-for="(shop,index) in goodslist[1].goodslist1" :key='index'>
					<a href="#">
						<img :src="../assets/img/clothes1.png"/>
					</a>
					<p>{{shop.name}}</p>
					<p><span id="price">￥{{shop.price}}</span><span id="icon"><i class="iconfont icon-gouwuchekong"></i></span></p>
				</li>
				
			</ul>
			<h5>手机数码</h5>
			<ul>
				<li v-for="(shop,index) in goodslist[2].goodslist2" :key='index'>
					<a href="#">
						<img :src="../assets/img/clothes1.png"/>
					</a>
					<p>{{shop.name}}</p>
					<p><span id="price">￥{{shop.price}}</span><span id="icon"><i class="iconfont icon-gouwuchekong"></i></span></p>
				</li>
				
			</ul>
			<h5>运动户外</h5>
			<ul>
				<li v-for="(shop,index) in goodslist[3].goodslist3" :key='index'>
					<a href="#">
						<img :src="../assets/img/clothes1.png"/>
					</a>
					<p>{{shop.name}}</p>
					<p><span id="price">￥{{shop.price}}</span><span id="icon"><i class="iconfont icon-gouwuchekong"></i></span></p>
				</li>
				
			</ul>
		</div>-->
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from '../lib/axios';
	export default{
		data(){
			return{
				typeList:[],
				goodslist:[]
			}
		},
		created() {
		    // 第一次请求
		    this.getGoodsList();
		},
		methods:{
			async getGoodsList() {
			    const { g, p } = axios;
			    const data = await g({
			        url: 'https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/getdata',
			    });
//		        console.log(data.data.goodsList);
//			导航图标信息
			    const shopList1 = data.data.typeList;
		        this.typeList = shopList1;
//		          体闲零食
		      	const goodslist0 = data.data.goodsList[0].goods.list;
//		          精品服饰
		      	const goodslist1 = data.data.goodsList[1].goods.list;
//		          手机数码
		      	const goodslist2 = data.data.goodsList[2].goods.list;
		  //运动户外
		      	const goodslist3 = data.data.goodsList[3].goods.list;
		      	this.goodslist = [{goodslist0},{goodslist1},{goodslist2},{goodslist3}]
		      	console.log(this.goodslist);
		    },
		}
	}
</script>

<style>
	*{padding: 0;margin: 0;}
	#main{
		overflow: hidden;
		width: 100%;
	}
	#banner{
		height: 205px;
		width: 100%;
	}
	.img01{
		height: 205px;
		width: 100%;
	}
	#nav{
		padding: 15px 0px;
		box-sizing: border-box;
		overflow: hidden;
		width: 100%;
	}
	#nav ul {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	#nav ul li{
		list-style: none;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		padding: 0px 10px;
		margin-bottom: 5px;
		justify-content: center;
		align-items: center;
	}
	#nav ul li img{
		height: 45px;
		width: 45px;
	}
	#nav ul li p{
		font-size: 12px;
	}
	/*商品列表*/
	#goods{
		width: 100%;
		overflow: hidden;
	}
	#goods h5 {
		margin: 0px 10px;
		padding-bottom: 5px;
		border-bottom: 1px #ccc solid;
	}
	
	#goods ul{
		box-sizing: border-box;
		padding:8px 10px;
		overflow: hidden;
		column-count: 2;
		column-gap: 8px;
	}
	#goods ul li{
		list-style: none;
		width: 100%;
		height:100%;
		overflow: auto;
		margin-bottom: 8px;
	}
	#goods ul li img{
		height: 135px;
		width: 100%;
	}
	#goods ul li p{
		box-sizing: border-box;
		padding: 3px 5px;
		display: flex;
		justify-content: space-between;
	}
	#goods ul li #price{
		color: #FF6600;
	}
</style>