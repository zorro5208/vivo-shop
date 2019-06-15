<template>
  <div class="container">
    <div class="container-bj">
      <router-link to="/login" tag="div">
        <p>
          <img src="../assets/img/tou.jpg">
        </p>
        <p>
          <span>{{uname}}</span>
        </p>
      </router-link>
      <p>不要被人言左右，要相信自己的判断</p>
    </div>

    <div class="container-integral">
      <p>
        <span>5</span>
        <span>优惠券</span>
      </p>
      <p>
        <span>2</span>
        <span>换鼓励金</span>
      </p>
      <p>
        <span>0</span>
        <span>积分</span>
      </p>
    </div>

    <router-link class="container-order" to="/order" tag="div">
      <div class="container-order-1">
        <p class="left">我的订单</p>
        <p class="right">全部订单 ></p>
      </div>
      <div class="container-order-2">
        <p class v-for="(list,index) in container" :key="index">
          <img :src="list.img" alt>
          <span>{{list.name}}</span>
        </p>
      </div>
    </router-link>

    <div class="container-con" id="transition">
      <router-link to="/MyCollection" class="con">
        <div class="con-left">
          <span class="mui-icon mui-icon-star-filled"></span>
          <span>我的收藏</span>
        </div>
        <div class="con-rigth">
          <span class="mui-icon mui-icon-forward"></span>
        </div>
      </router-link>

      <router-link to="/address" class="con" id="transition">
        <div class="con-left">
          <span class="mui-icon-extra mui-icon-extra-express"></span>
          <span>我的收货地址</span>
        </div>
        <div class="con-rigth">
          <span class="mui-icon mui-icon-forward"></span>
        </div>
      </router-link>

      <router-link to="/cart" class="con" id="transition">
        <div class="con-left">
          <span class="mui-icon-extra mui-icon-extra-cart"></span>
          <span>我的购物车</span>
        </div>
        <div class="con-rigth">
          <span class="mui-icon mui-icon-forward"></span>
        </div>
      </router-link>

      <router-link to="/order" class="con">
        <div class="con-left">
          <span class="mui-icon-extra mui-icon-extra-sweep"></span>
          <span>扫码分享</span>
        </div>
        <div class="con-rigth">
          <span class="mui-icon mui-icon-forward"></span>
        </div>
      </router-link>
      <a href="##" class="con" v-show="isShow" @click="out">
        <div class="con-left">
          <span class="mui-icon mui-icon-personadd"></span>
          <span>退出登录</span>
        </div>
        <div class="con-rigth">
          <span class="mui-icon mui-icon-forward"></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { delCookie, getCookie } from "../lib/cookie.js";
export default {
  name: "Mycontainer",
  data() {
    return {
      container: [
        {
          img: require("../assets/img/111.png"),
          name: "待付款"
        },
        {
          img: require("../assets/img/222.png"),
          name: "待收货"
        },
        {
          img: require("../assets/img/333.png"),
          name: "待评价"
        },
        {
          img: require("../assets/img/444.png"),
          name: "退货/退款"
        }
      ],
      isShow: 0,
      uname: "登录/注册"
    };
  },
  created() {
    this.$store.state.isShowHeader = true;
    this.$store.state.isShowFooter = true;
    this.$store.state.isTitle = "个人中心";
  },
  mounted() {
    /*页面挂载获取cookie，如果存在uname的cookie，不需登录*/
    if (localStorage.getItem("token")) {
      this.uname = localStorage.getItem("token");
      this.isShow = localStorage.getItem("isLogin");
    }
  },
  methods: {
    // 退出登录
    out() {
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");
      this.$store.state.isLogin = 0;
      this.$store.state.token = "";
      this.$router.push("/login");
    }
  }
};
</script>


<style lang="stylus" scoped>
.container-order {
  width: 100%;
  height: 125px;
  background: white;
  display: block;
  margin-top: 10px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;

  .container-order-1 {
    width: 100%;
    height: 32px;
    line-height: 32px;
    overflow: hidden;

    .left {
      float: left;
      display: block;
      line-height: 24px;
      margin-left: 20px;
      font-size: 14px;
      color: #333;
    }

    .right {
      float: right;
      line-height: 24px;
      margin-right: 20px;
      font-size: 14px;
      color: #333;
    }
  }

  .container-order-2 {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 25%;
      display: flex;
      flex-direction: column;
      margin-top: 4.8px;

      img {
        width: 30px;
        height: 30px;
        margin: auto;
      }

      span {
        text-align: center;
        padding-top: 10px;
        color: #333;
      }
    }
  }
}

.t {
  background-image: url('../assets/img/t.png');
}

.container {
  width: 100%;
  overflow: hidden;

  .container-bj {
    width: 100%;
    height: 190px;
    background: url('../assets/img/bj.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    span {
      color: #ffffff;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      color: #ffffff;
      text-align: center;
    }
  }

  .container-integral {
    width: 100%;
    height: 60px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;

    p {
      width: 33%;
      height: 100%;
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      color: #333;
      justify-content: center;
    }
  }

  .container-con {

    .con {
      width: 100%;
      height: 45px;
      background: #ffffff;
      border-bottom: 1px solid #f0f0f0;
      display: block;

      .con-left {
        float: left;
        line-height: 44px;
        padding-left: 15px;

        .mui-icon {
          font-size: 22px;
        }

        .mui-icon-extra {
          font-size: 18px;
        }

        span {
          font-size: 14px;
          padding-left: 5px;
          color: #333;
        }
      }

      .con-rigth {
        float: right;
        line-height: 44px;
        padding-right: 15px;
        color: #333;
      }
    }
  }
}
</style>