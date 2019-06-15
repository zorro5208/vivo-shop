<template>
  <!-- 回到顶部 -->
  <div class="go-top">
    <div class="box">
      <span class="mui-icon-extra mui-icon-extra-top" @click="goTop" ref="btn"></span>
    </div>
  </div>
</template>

<script>
// let timer = null
export default {
  data() {
    return {
      isTop: true,
      timer: null
    };
  },
  mounted() {
    this.needScroll();
  },
  methods: {
    needScroll() {
      let clientHeight = document.documentElement.clientHeight;
      let obtn = this.$refs.btn;
      window.onscroll = function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) {
          obtn.style.display = "block";
        } else {
          obtn.style.display = "none";
        }
        if (!this.isTop) {
          clearInterval(this.timer);
        }
        this.isTop = false;
      };
    },
    goTop() {
      let self = this;
      self.timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        self.isTop = true;
        if (osTop === 0) {
          clearInterval(self.timer);
        }
      }, 30);
    }
  }
};
</script>

<style lang="scss" scoped>
.go-top {
  width: 100%;
}
.mui-icon-extra {
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 13px;
  bottom: 65px;
  background: white;
  border-radius: 50%;
}
</style>