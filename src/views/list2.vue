
<template>
  <div class="list">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @click.native="qiehuan(selectedId)"
      
    ></ly-tab>
    <div id="goods">
      <ul v-show="name">
        <li v-for="(shop,index) in goodslist.PartsLower_data" :key="index" @click="goDetails(shop.id)">
          <a href="#">
            <img v-lazy="shop.homeImg">
          </a>
          <p>{{shop.homeName}}</p>
          <p>
          <span id="price">￥{{shop.homePrice}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "../lib/axios";
export default {
  name: "Demo",
  data() {
    return {
      name: "全部",
      list: [],
      classifyIndex:0,
      goodslist: [],
      selectedId: 0,
      bottomSelectedId: 0,
      items: [
        { label: "全部" },
        { label: "充电器" },
        { label: "保护膜" },
        { label: "耳机音响" },
        
      ],
      options: {
        activeColor: "#1d98bd"
      }
    };
  },
  created() {
    this.getClassifyList();
    this.$store.state.isShowHeader = true;
	  this.$store.state.isShowFooter = true;
    this.$store.state.isTitle = "类目";
  },
  methods: {
    qiehuan(index) {
    //   console.log(index);
      var _this = this;
      _this.goodslist = _this.list[index];
    },
    async getClassifyList() {
      const { g, p } = axios;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/goodsdata"
      });
    //   console.log(data.data.data.parts.PartsLower);

      // //右边栏数据
      this.list = data.data.data.parts.PartsLower;
      this.goodslist = this.list[0];
    },
    goDetails(id) {
      console.log(id);
      this.$router.push({
        name: "detail",
        query: { id: id }
      });
    }
  }
};
</script>

<style>
a{
  
  /* color: #007aff !important */

}
#goods {
  width: 100%;
  overflow: hidden;
}
#goods ul {
  background: white;
  box-sizing: border-box;
  padding: 20px 10px;
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
  overflow: hidden;
  white-space: nowrap;
}
#goods ul li #price {
  color: red;
  font-size: 16px;
}
#goods ul li .nametwo {
  font-size: 12px;
  color: rgba(92, 91, 91, 0.884);
}
</style>

