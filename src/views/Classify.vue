<template>
  <div id="sort">
    <div class="calssify-con">
      <div class="calssify-left" >
        <ul class="calssify-left-ul">
          <li
            v-for="(list,index) in leftList"
            :key="index"
            @click="qiehuan(index)"
            :class="{active:index===classifyIndex}"
          >{{list.name}}</li>
        </ul>
      </div>
      <div class="calssify-rigth" >
        <ul class="calssify-right-ul">
          <li v-for="(list,index) in rightList.rigth_data" :key="index" @click="goDetails(list.id)">
            <img v-lazy="list.img">
            <span>{{list.name}}</span>
          </li>
        </ul>
      </div>
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
      title: "全部分类",
      leftList: [],
      rightList: [],
      list: [],
      classifyIndex: 0
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    async getClassifyList() {
      const { g, p } = axios;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/goodsdata"
      });
    //   console.log(data.data.data.classify.right);
      //左边栏数据
      this.leftList = data.data.data.classify.left;
      //右边栏数据
      this.list = data.data.data.classify.right;
      this.rightList = this.list[0];
    },
    qiehuan(index) {
      var _this = this;
      _this.classifyIndex = index;
      _this.rightList = _this.list[index];
	},
	goDetails(id) {
      console.log(id);
      this.$router.push({
        path: "detail",
        query: { id: id }
      });
    }
  },
  created() {
    this.getClassifyList();
	this.$store.state.isShowHeader = true;
	this.$store.state.isShowFooter = true;
    this.$store.state.isTitle = "全部分类";
  }
};
</script>

<style>
.active {
  border-left: 2px solid;
  background: #ffffff;
  color: #199cfe;
}
.calssify-con {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0;
}
.calssify-left {
  float: left;
  width: 85px;
  height: 100%;
  background: #f6f6f6;
  margin-bottom: 10px;
  font-size: 12px;
}
.calssify-left li {
  padding: 25px 0px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calssify-rigth {
  overflow: scroll;
  float: right;
  width: 290px;
  height: 91%;
  background: white;
  margin-bottom: 50px;
}

.calssify-rigth ul {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.calssify-rigth ul li {
  height: 140px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin-top: 10px;
  font-size: 14px;
  float: left;
}
.calssify-rigth ul li img {
  width: 90px;
  display: block;
  margin: auto;
}
.calssify-rigth ul li span {
  color: #999;
  line-height: 30px;
  font-size: 14px;
}
</style>