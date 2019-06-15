<template>
  <div class="cart">
    <div class="cartMain" v-if="carts.length">
      <ul>
        <li v-for="(goods,index) in cartData" :key="index">
          <!-- 购物车单选 -->
          <div class="select" @click="danxuan(goods)">
            <div class="select-area">
              <label class="check-mark" v-show="!goods.danx1uan"></label>
            </div>
            <div class="select-area">
              <label class="check-mark" v-show="goods.danx1uan" style="background:#25b5fe"></label>
            </div>
          </div>
          <!-- 购物车商品信息 -->
          <div class="cartImage">
            <img :src="goods.img">
          </div>
          <div class="cartInformation">
            <div class="cartName">{{goods.name}}</div>
            <p class="cartPrice">￥{{goods.price}}</p>
          </div>
          <!-- 购物车商品数量 -->
          <div class="cartNumber">
            <a
              href="javascript:;"
              class="add"
              @click="reduce(index)"
            >-</a>
            <input type="text" class="input" v-model="goods.value">
            <a href="javascript:;" class="reduce" @click="add(index)">+</a>
            <a href="#">
              <span class="mui-icon mui-icon-trash" @click="shanchu(index)"></span>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div class="cartImg" v-if="!carts.length">
      <img
        src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/icon-no-prod_abd60be.png"
        alt="购物车图片"
      >
      <h1>购物车是空的哦，快去购物吧</h1>
      <router-link to='/classify'>逛一逛</router-link>
    </div>
    <div class="cartFooter" v-if="carts.length">
      <div class="checkAll" @click="quanxuan()">
        <div class="select-area">
              <label class="check-mark" v-show="!bChecked" ></label>
			  <span>全选</span>
            </div>
            <div class="select-area">
              <label class="check-mark" v-show="bChecked" style="background:#25b5fe"></label>
			  <span>全选</span>
            </div>
      </div>
      <div class="Total">
        合计：
        <span style="font-size: 1rem;color:#E3211E">￥{{sum}}</span>
      </div>
      <div class="Settlement">
        <a href="javascript:void(0);">结算</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: false,
      cartData:
        this.$store.state.cartData.length > 0
          ? this.$store.state.cartData
          : localStorage.cart != undefined
          ? JSON.parse(localStorage.cart)
          : [],

      priceTotal:
        this.$store.state.priceTotal > 0
          ? this.$store.state.priceTotal
          : localStorage.priceTotal != undefined
          ? localStorage.priceTotal
          : 0,

      bChecked: false,

      bAllChecked: true
    };
  },
  computed: {
    carts() {
      return this.$store.state.cartData;
    },
    sum: function() {
      var sum = 0;
      this.$store.state.cartData.forEach(goods => {
        if (goods.danx1uan) {
          sum += goods.price * goods.value;
        }
      });
      return sum;
    },
    sumValue() {
      var sumValue = 0;
      this.$store.state.cartData.forEach(goods => {
        if (goods.danx1uan) {
          sumValue += parseInt(goods.value);
        }
      });
      return sumValue;
    }
  },
  created() {
    this.$store.state.isShowHeader = true;
    this.$store.state.isShowFooter = true;
    this.$store.state.isTitle = "购物车";
    if (this.carts.length) {
      this.$store.state.isShowFooter = false;
    }
  },
  methods: {
	  ...mapMutations(["shanchu", "add", "reduce", "settlement"]),
    //点击选择
    danxuan(goods) {
      //   console.log(goods);
      goods.danx1uan = !goods.danx1uan;
      if (!goods.danx1uan) {
        this.bChecked = false;
      }
	},
	quanxuan() {
      this.bChecked = !this.bChecked;
      if (this.bChecked) {
        this.$store.state.cartData.forEach(goods => {
          goods.danx1uan = true;
        });
      } else {
        this.$store.state.cartData.forEach(goods => {
          goods.danx1uan = false;
        });
      }
    },
    
  }
};
</script>

<style>
body {
  background-color: rgb(244, 244, 244) !important;
}
.select .select-area {
  width: 10%;
  height: 100%;
  float: left;
  position: relative;
}

.select .select-area .check-mark {
  width: 1rem;
  height: 1rem;
  border: #ccc solid 1px !important;
  border-radius: 100%;
  position: absolute;
  z-index: 1;
  top: 43%;
  left: 15%;
}

.select .select-area .check-mark input {
  opacity: 0;
  width: 100%;
  height: 100%;
}

.select .select-area .check-mark.active {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none 0px;
}
.checkAll .select-area {
  width: 70%;
  height: 100%;
  float: left;
  position: relative;
}
.checkAll .select-area span{
	float: right
}
.checkAll .select-area .check-mark {
  width: 1rem;
  height: 1rem;
  border: #ccc solid 1px !important;
  border-radius: 100%;
  position: absolute;
  z-index: 1;
  top: 43%;
  left: 15%;
}

.checkAll .select-area .check-mark input {
  opacity: 0;
  width: 100%;
  height: 100%;
}

.checkAll .select-area .check-mark.active {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none 0px;
}
.select {
  float: left;
  margin-top: 50px;
  padding-left: 1rem;
  margin-right: 20px;
}
.select i {
  font-size: 0.53rem;
}
.checkAll {
  width: 26%;
  height: 40px;
  line-height: 3rem;
  float: left;
  font-size: 1rem;
  padding-left: 10px;
}

.mint-switch-core {
  width: 42px;
  height: 22px;
}
.mint-switch-core::after {
  width: 20px;
  height: 20px;
}
.mint-switch-core::before {
  width: 40px;
  height: 20px;
  background-color: #fdfdfd;
}
.checkAll i {
  font-size: 0.53rem;
  padding-left: 0.5rem;
}
.cart {
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
}
.cartheader {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 10px #cecece;
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  background: white;
  top: 0;
  font-size: 0.41rem;
}
.cartheader i {
  display: block;
  float: left;
  height: 50px;
  font-size: 0.71rem;
  color: black;
  width: 0.9rem;
}
.cartList {
  width: 100%;
  height: 4rem;
  background: white;
  margin-top: 0.04rem;
}
.cartMain {
  margin-top: 1.3rem;
  margin-bottom: 1.24rem;
  float: left;
}
.cartMain ul li {
  list-style: none;
  overflow: hidden;
}
.cartImage img {
  width: 95px;
  height: 95px;
}
.cartImage {
  float: left;
  padding: 0.5rem 0rem;
}
.cartInformation {
  float: left;
  width: 13rem;
  padding-top: 1rem;
}
.cartPrice {
  color: red;
  font-size: 15px;
}

.cartNumber {
  float: left;
  width: 210px;
}
.cartNumber .mui-icon {
  float: right;
}
.cartNumber .add,
.cartNumber .reduce {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border: 1px solid #dedede;
  float: left;
  color: #b2b2b2;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
}
.cartNumber .input {
  height: 1.5rem !important;
  float: left;
  text-align: center;
  border: 1px solid #dedede;
}
.cartNumber .add {
  border-right: none;
}
.cartNumber .reduce {
  border-left: none;
}
.cartFooter {
  position: fixed;
  width: 100%;
  height: 2.7rem;
  font-size: 0.35rem;
  background: white;
  bottom: 0;
  display: block;
  border-top: 1px solid #ccc;
}
.cartImg img {
  width: 8.4rem;
  height: 7.2rem;
  display: block;
  margin: auto;
  margin-top: 5.5rem;
}
.cartImg a {
  display: block;
  text-align: center;
  margin: 1.8rem auto;
  width: 110px;
  height: 37px;
  line-height: 37px;
  border-radius: 4px;
  text-align: center;
  background: #e0524b;
  color: white;
  font-weight: 800;
  font-size: 0.5rem;
}
.cartName {
  float: left;
  width: 13rem;
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cartName a {
  color: black;
  font-size: 0.57rem;
  float: right;
}
.cartImg h1 {
  margin-top: 0.5rem;
  text-align: center;
  color: #959595;
  font-size: 0.8rem;
}
._box {
  width: 63%;
  height: 100%;
  float: left;
}
.Total {
  float: left;
  width: 35%;
  text-align: center;
  line-height: 3rem;
  font-size: 1rem;
}
.Settlement {
  width: 25%;
  height: 75%;
  background: #f81200;
  float: right;
  margin-top: 0.3rem;
  border-radius: 40px;
  margin-right: 0.5rem;
}
.Settlementtwo {
  width: 50%;
  height: 100%;
  background: #e3211e;
  float: right;
}
.Settlement a,
.Settlementtwo a {
  color: white;
  text-align: center;
  line-height: 1.9rem;
  display: block;
  font-size: 1rem;
}
</style>
