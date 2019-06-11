<template>
  <div id="main">
    <section class="guarantees"></section>
    <!--轮播图-->
    <div id="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img class="img01" src="../assets/banner_1.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="img01" src="../assets/banner_2.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="img01" src="../assets/banner_3.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="img01" src="../assets/banner_4.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="img01" src="../assets/banner_5.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--导航-->
    <div id="nav">
      <ul>
        <li v-for="(good,index) in typeList" :key="index">
          <a href="#">
            <img :src="good.url">
          </a>
        </li>
      </ul>
    </div>
    <!--商品列表-->
    <div id="goods">
      <h5><span>-热卖专区-</span></h5>
      <p>
        <img
          class="titleImg"
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20190605/2019060516404595353_original.jpg"
        >
      </p>
      <ul>
        <li v-for="(shop,index) in goodslist[0]" :key="index">
          <a href="#">
            <img v-lazy="shop.ImageOne">
          </a>
          <p>{{shop.name}}</p>
		  <p><span class="nametwo">{{shop.nametwo}}</span></p>
          <p><span id="price">￥{{shop.Price}}</span></p>
        </li>
      </ul>
	<!-- 精品手机 -->
      <h5><span>-精品手机-</span></h5>
      <p>
        <img
          class="titleImg"
          src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20190531/20190531234040594823_original.jpg"
        >
      </p>
      <ul>
        <li v-for="(shop,index) in goodslist[1]" :key="index">
          <a href="#">
            <img v-lazy="shop.ImageOne">
          </a>
          <p>{{shop.name}}</p>
		  <p><span class="nametwo">{{shop.nametwo}}</span></p>
          <p><span id="price">￥{{shop.Price}}</span></p>
        </li>
      </ul>
	  <p class="more" >
      <a href="##" @click="loadMore">更多精品手机></a>
    </p>
	<!-- 精品配件 -->
      <h5><span>-精品配件-</span></h5>
      <ul>
        <li v-for="(shop,index) in goodslist[2]" :key="index">
          <a href="#">
            <img v-lazy="shop.homeImg">
          </a>
          <p>{{shop.homeName}}</p>
          <p><span id="price">￥{{shop.homePrice}}</span></p>
        </li>
      </ul>
	  <p class="more"><a href="#">更多精品配件></a></p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "../lib/axios";
export default {
  data() {
    return {
      typeList: [],
      goodslist: []
    };
  },
  created() {
    // 第一次请求
    this.getGoodsList();
    this.getTypeList();
    this.$store.state.isShowHeader = true;
    this.$store.state.isShowFooter = true;
    this.$store.state.isTitle = 'vivo';
  },
  methods: {
    loadMore(){
      this.getGoodsList();
      console.log(121);
    },
    async getTypeList() {
      const { g, p } = axios;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/typedata"
      });
      //   console.log(data);
      //导航图标信息
      this.typeList = data.data.typeList;
    },
    async getGoodsList() {
      const { g, p } = axios;
      const data2 = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/goodsdata"
      });
      // console.log(data2.data.data);
      //热卖专区
      var goodslist0 = data2.data.data.phone.lower[2].lower_data;
      // console.log(goodslist0);
      //精品手机
      var goodslist1 = data2.data.data.phone.lower[0].lower_data;
      //精品配件
      var goodslist2 = data2.data.data.set;

      this.goodslist.push(goodslist0);
      this.goodslist.push(goodslist1);
      this.goodslist.push(goodslist2);
      // console.log(this.goodslist)
    }
  },
 
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
img[lazy=loading] {
  height: 105px;
  width: 65%;
  margin: auto;
}
#main {
  overflow: hidden;
  width: 100%;
}
.guarantees {
  width: 100%;
  height: 30px;
  background: #fff
    url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/home/bg-guarantees_c8b5ccb.png)
    center center no-repeat;
  background-size: 375px 28px;
}
#banner {
  height: 230px;
  width: 100%;
}
.img01 {
  height: 230px;
  width: 100%;
}
#nav {
  padding-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  background: white;
}
#nav ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
#nav ul li {
  list-style: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px 11px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
}
#nav ul li img {
  height: 55px;
  width: 55px;
}
#nav ul li p {
  font-size: 12px;
}
/*商品列表*/
#goods {
  width: 100%;
  overflow: hidden;
}
#goods .titleImg {
  overflow: hidden;
  width: 100%;
  height: 150px;
}
#goods h5 {
	color: black;
	font-size: 18px;
	height: 45px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center
}
#goods p{
	margin-bottom: 0px;
}
#goods ul {
  background: white;
  box-sizing: border-box;
  padding: 25px 10px;
  overflow: hidden;
  column-count: 2;
  column-gap: 8px;
}
#goods ul li {
  text-align: center;
  list-style: none;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-bottom: 8px;
}
#goods ul li img {
  height: 105px;
  width: 65%;
}
#goods ul li p {
  margin-bottom: 0px;
  color: black;
  box-sizing: border-box;
  padding: 3px 5px;
  display: flex;
  justify-content: center;
}
#goods ul li #price {
  color: red;
  font-size: 16px
}
#goods ul li .nametwo{
	font-size: 12px;
	color: rgba(92, 91, 91, 0.884);
}
#goods .more{
	height: 35px;
	background: white;
	text-align: center;
}
#goods .more a{
	color: black;
}
</style>