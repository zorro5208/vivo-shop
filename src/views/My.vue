<template>
  <div class="container">
    <div class="container-bj">
      <img src="../assets/img/tou.jpg">
      <span>Myfwk</span>
      <p>不要被人言左右，要相信自己的判断</p>
    </div>

    <div class="container-integral">
      <p>
        <span>0</span>
        <span>优惠券</span>
      </p>
      <p>
        <span>0</span>
        <span>换鼓励金</span>
      </p>
      <p>
        <span>{{jifeng}}</span>
        <span>积分</span>
      </p>
    </div>

    <router-link class="container-order" to="/order" tag="div">
      <div class="container-order-1">
        <p class="left">我的订单</p>
        <p class="right">全部订单 ></p>
      </div>
      <div class="container-order-2">
        <p class v-for="(list,index) in container" :key='index'>
          <img :src="list.img">
          <span>{{list.name}}</span>
        </p>
      </div>
    </router-link>

    <div class="container-con" id="transition">
      <router-link to="/MyCollection" class="con">
        <div class="con-left">
          <i class="iconfont icon-collection"></i>
          <span>我的收藏</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>

      <router-link to="/address" class="con" id="transition">
        <div class="con-left">
          <i class="iconfont icon-gouwuche"></i>
          <span>我的收货地址</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>

      <router-link to="/cart" class="con" id="transition">
        <div class="con-left">
          <i class="iconfont icon-gouwuche"></i>
          <span>我的购物车</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>

      <router-link to="/order" class="con">
        <div class="con-left">
          <i class="iconfont icon-share_icon"></i>
          <span>扫码分享</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <a target="_blank" href="http://www.myfwk.cn" class="con">
        <div class="con-left">
          <i class="iconfont icon-bangzhuguanyuwomen"></i>
          <span>关于我</span>
        </div>
        <div class="con-rigth">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Mycontainer",
  data() {
    return {
      container: [
        {
          img: "../assets/img/111.png",
          name: "待付款"
        },
        {
          img: "../assets/img/222.png",
          name: "待收货"
        },
        {
          img: "../assets/img/333.png",
          name: "待评价"
        },
        {
          img: "../assets/img/444.png",
          name: "退货/退款"
        }
      ]
    };
  },
  
};
</script>


<style lang="stylus" scoped>
.container-order {
  width: 100%;
  height: 56px;
  background: white;
  display: block;
  margin-bottom: 2.4px;
  margin-top: 2.4px;
  font-size: 5.6px;

  .container-order-1 {
    width: 100%;
    height: 24px;

    .left {
      float: left;
      display: block;
      line-height: 24px;
      margin-left: 8px;
      font-size: 6.4px;
    }

    .right {
      float: right;
      line-height: 24px;
      margin-right: 9.6px;
      font-size: 6.4px;
    }
  }

  .container-order-2 {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 25%;
      display: flex;
      flex-direction: column;
      margin-top: 4.8px;

      img {
        width: 12.8px;
        height: 12.8px;
        margin: auto;
      }

      span {
        text-align: center;
        padding-top: 4.8px;
      }
    }
  }
}

.t {
  background-image: url('../assets/img/t.png');
}

.container {
  width: 100%;
  height: 240px;
  position: absolute;
  top: 50px;

  .container-bj {
    width: 100%;
    height: 100%;
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
    }
  }

  .container-integral {
    width: 100%;
    height: 32px;
    background: #ffffff;
    display: flex;
    justify-content: center;

    p {
      width: 33%;
      height: 100%;
      font-size: 5.76px;
      line-height: 9.6px;
      font-weight: 500;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }

  .container-con {
    margin-bottom: 23.2px;

    .con {
      width: 100%;
      height: 22.56px;
      background: #ffffff;
      border-bottom: 0.0625rem solid #f0f0f0;
      display: block;

      .con-left {
        float: left;
        line-height: 20.8px;
        padding-left: 7.52px;

        i {
          font-size: 8px;
        }

        span {
          font-size: 5.92px;
          padding-left: 1.6px;
        }
      }

      .con-rigth {
        float: right;
        line-height: 20.8px;
        padding-right: 6.4px;
      }
    }
  }
}
</style>