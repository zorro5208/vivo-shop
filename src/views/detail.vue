<template>
  <div class="goodDetail" id="transitionName">
    <div class="goodDetailList">
      <ul style="background: white;">
        <li v-for="(goodDetail,index) in goodDetails" :key="index">
          <div class="goodDetaiSwipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(list,index) in goodDetail.homeSwipe" :key="index">
                <img :src="list.swipe" alt="图片">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="goodDetailMain">
            <div class="goodDetailPaid">￥{{goodDetail.homePrice}}</div>
            <div class="goodDetailName">{{goodDetail.homeName}}</div>
            <div style="text-align: justify;font-size: 0.348rem;">
              <span style="margin-left:-.2rem;color:#FF4B3D;">【{{goodDetail.homeBright}}】</span>
              {{goodDetail.homeTitle}}
            </div>
          </div>

          <div class="goodDetailValue">
            <div class="_Value">购买数量：</div>
            <div class="_cartNumber" style="margin-left: 2rem;">
              <a href="javascript:;" @click="jian(index)" class="goodDetailReduce">-</a>
              <input type="text" v-model="goodDetail.homeValue" readonly="readonly">
              <a href="javascript:;" @click="jia(index)" class="goodDetailAdd">+</a>
            </div>
          </div>

          <div class="goodDetailBox">
            <mt-navbar v-model="selected">
              <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
              <mt-tab-item id="tab-container2">参数</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected" swipeable>
              <mt-tab-container-item id="tab-container1">
                <div class="goodDetailImg">
                  <p v-for="(Image,index) in goodDetail.Images" :key="index">
                    <img v-bind:src="Image.one" alt="详情图片">
                  </p>
                </div>
              </mt-tab-container-item>

              <mt-tab-container-item id="tab-container2">
                <div class="peizhi" v-html="goodDetail.homePeizhi"></div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>

          <div class="goodDetailFooter">
            <div class="left">
              <div class="cart">
                <div class="cartlength">{{cartlength}}</div>
                <span>购物车</span>
              </div>
              <div class="collection">
                <div
                  class="collection-box"
                  @click="addCollection(goodDetail)"
                  v-show="!$store.state.ces"
                >
                  <i class="iconfont icon-collection"></i>
                  <span>收藏</span>
                </div>
                <div
                  class="collection-box"
                  @click="addCollection(goodDetail)"
                  v-show="$store.state.ces"
                >
                  <i class="iconfont icon-shoucangxuanzhong1" style="color:red"></i>
                  <span style="color:red">取消</span>
                </div>
              </div>
              <div class="shop">
                <span>店铺</span>
              </div>
            </div>
            <div class="rigth">
              <div class="add">
                <a href="javascript:void(0);" @click="add(goodDetail)">加入购物车</a>
              </div>
              <div class="purchase">
                <a href="javascript:void(0);" @click="pay(goodDetail.id,goodDetail.homeValue)">提交订单</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "../lib/axios";
export default {
  data() {
    return {
      isShow: false,
      goodDetails: [],
      selected: "tab-container1",
      cartlength: 0
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    async getgoodsList() {
      const { g, p } = axios;
      var id = this.$route.query.id;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/goodsdata"
      });
      for (var i = 0; i < data.data.data.home.length; i++) {
        if (data.data.data.home[i].id == id) {
          this.goodDetails.push(data.data.data.home[i]);
        }
      }

      const data2 = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/goodsdata"
      });
      for (var i = 0; i < data2.data.data.set.length; i++) {
        if (data2.data.data.set[i].id == id) {
          this.goodDetails.push(data2.data.data.set[i]);
        }
      }
    //   console.log(data);
    }
  },
  created() {
    this.getgoodsList();
    this.$store.state.isShowHeader = true;
    this.$store.state.isShowFooter = false;
    this.$store.state.isTitle = "商品详情";
  }
};
</script>
<style lang="stylus" >

.peizhi {
  width: 90%;
  margin: auto;

  div {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  h3 {
    height: 2rem;
    line-height: 2.3rem;
    font-size: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  span {
    font-size: 0.38rem;
    color: #888;
    margin-top: 0.3rem;
    display: block;
  }

  p {
    height: 0.55rem;
    color: #888;
  }
}

.cartlength {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 5px;
  left: 40px;
  background: #f81301;
  border-radius: 50%;
  text-align: center;
  line-height: 15px;
  color: white;
}

.goodDetailList {
  margin-bottom: 1rem;
}

.goodDetailHeader {
  width: 100%;
  z-index: 1;
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 12px;
  background: white;
  position: fixed;
  box-shadow: 0 0 10px #cecece;
  text-align: center;
  font-size: 0.41rem;
}

.goodDetailHeader i {
  display: block;
  float: left;
  height: 50px;
  padding-left: 0.3rem;
  font-size: 0.71rem;
  color: black;
}

.goodDetaiSwipe {
  height: 320px;
  margin-top: 3px;
  background: white;
  padding-top: 20px;
}

.goodDetaiSwipe img {
  width: 70%;
  height: 265px;
  display: block;
  /* margin-top: 60px; */
  margin: auto;
}

.goodDetailMain {
  background: white;
  border-bottom: 1px solid #cecece;
  padding: 5px 20px;
  margin-top: 10px;
  box-sizing: border-box;
}
.goodDetailName {
  color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}

.goodDetailPaid {
  color: #f81200;
  font-size: 22px;
  margin-bottom: 5px;
}

.goodDetailFooter {
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 50px;
  background: #F6F4F7;
  border-top: 1px solid #efefef;

  .left {
    width: 45%;
    float: left;
    position: relative;
    font-size: 14px;
    height: 50px;
    line-height: 50px;

    .cart {
      width: 33%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;
      position: relative;

      img {
        width: 0.76rem;
        height: 0.7rem;
        display: block;
        margin: auto;
      }

      span {
        text-align: center;
        color: #767676;
      }
    }

    .shop {
      width: 33%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;

      img {
        width: 0.76rem;
        height: 0.7rem;
        display: block;
        margin: auto;
      }

      span {
        display: block;
        text-align: center;
        color: #767676;
      }
    }

    .collection {
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      color: #767676;

      .collection-box {
        text-align: center;
      }

      i {
        font-size: 0.6rem;
        display: block;
        text-align: center;
      }

      span {
        text-align: center;
      }
    }
  }

  .rigth {
    width: 55%;
    float: right;
    height: 50px;
    line-height: 50px;

    .add {
      a {
        display: block;
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #FF9800;
        color: white;
        font-size: 0.35rem;
        float: left;
      }
    }

    .purchase {
      a {
        float: left;
        display: block;
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: white;
        font-size: 0.35rem;
        background: #E3211E;
      }
    }
  }
}

.gooDetailNumber {
  display: none;
}

.add a {
}

.purchase a {
}

.goodDetailImg {
  margin-top: 4px;
  margin-bottom: 6px;
}

.goodDetailImg img {
  width: 100%;
  height: auto;
  display: block;
}

table td {
  font-size: 0.31rem;
  text-align: center;
  color: #000;
}

.goodDetailValue {
  height: 40px;
  border-bottom: 1px solid #cecece;
  padding: 5px 20px;
}

input[type=text] {
  width: 50px !important;
  height: 30px !important;
  margin-bottom: 0px !important;
}

.goodDetailAdd {
  width: 20px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: white;
  float: left;
  border: 1px solid #b2b2b2;
  border-left: none;
  text-align: center;
  font-size: 0.5rem;
  color: black;
}

.goodDetailReduce {
  width: 20px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: white;
  float: left;
  border: 1px solid #b2b2b2;
  border-right: none;
  text-align: center;
  font-size: 0.5rem;
  color: black;
}

._cartNumber input {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  float: left;
  border: 1px solid #b2b2b2;
  text-align: center;
  color: black;
}

._Value {
  float: left;
  margin-top: 0.2rem;
  font-size: 14px;
}

.goodDetailColor {
  display: none;
}
</style>
