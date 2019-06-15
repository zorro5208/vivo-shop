<template>
  <div id="choice">
    <mt-index-list>
      <mt-index-section index="推荐">
        <mt-cell
          v-for="(val,index) in item"
          :key="index"
          :title="val.name"
          @click.native="choice(val.name)"
        ></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "../../lib/axios.js";
export default Vue.extend({
  data() {
    return {
      item: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { g, p } = axios;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf7b57bd166d82961e57e79/example/choice"
      });
      // console.log(data.data);
      //导航图标信息
      this.item = data.data;
    },
    choice(val) {
      console.log(1);
      this.$router.push({ name: "register", query: { name: val } });
    }
  }
});
</script>

