<template>
  <div id="app">
    <!--头部-->
    <div class="head" v-if="isShowHeader">
      <mt-header fixed :title="isTitle" style="background: #000000;font-size:20px;height:50px">
        <router-link to slot="left">
          <mt-button icon="back" @click.native="prev"></mt-button>
        </router-link>
        <router-link to="/search" slot="right">
          <mt-button icon="search" style="margin-right: 20px;"></mt-button>
        </router-link>
        <mt-button @click.native="show" icon="more" slot="right"></mt-button>
      </mt-header>
      <ul class="list" v-show="isShow">
        <li @click="show">
          <router-link to="/cart">
            <i class="iconfont icon-daohanggouwuche"></i> 购物车
          </router-link>
        </li>
        <li @click="show">
          <router-link to="/" tag="a">
            <i class="iconfont icon-icon-test"></i> 我的订单
          </router-link>
        </li>
        <li @click="show">
          <router-link to="/index" tag="a">
            <i class="iconfont icon-shouye"></i> 我的商城
          </router-link>
        </li>
        <li @click="show">
          <router-link to="/my">
            <i class="iconfont icon-weibiaoti2fuzhi12"></i> 账号中心
          </router-link>
        </li>
      </ul>
    </div>
    <!--内容-->
    <transition>
      <router-view style="padding-bottom: 50px"></router-view>
    </transition>
    <!--底部-->
    <nav class="mui-bar mui-bar-tab" v-if="isShowFooter">
      <router-link to="/index" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/classify" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-settings"></span>
        <span class="mui-tab-label">分页</span>
      </router-link>
      <router-link to="/cart" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <!-- <span class="mui-badge">0</span> -->
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/my" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      isShow: false,
      title: "vivo"
    };
  },
  //		created(){
  //			console.log(this.$route)
  //		},
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    prev() {
      this.$router.go(-1);
    }
  },
  computed: {
    isShowHeader() {
      // 从仓库获取值到组件
      return this.$store.state.isShowHeader;
    },
    isShowFooter() {
      // 从仓库获取值到组件
      return this.$store.state.isShowFooter;
    },
    isTitle() {
      return this.$store.state.isTitle;
    }
  }
};
</script>
<style>
@import "../assets/iconfont/iconfont.css";
</style>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  overflow-x: hidden;
}
.head {
  height: 50px;
  position: relative;
}
.head .list {
  position: absolute;
  left: 225px;
  top: 50px;
  background: white;
  width: 150px;
  z-index: 99;
  box-sizing: border-box;
  padding: 10px 0px;
}
.head .list li {
  list-style: none;
  padding: 8px 35px;
}
.head .list li a {
  font-size: 14px;
  color: black;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>