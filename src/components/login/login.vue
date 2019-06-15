<template>
  <div id="login">
    <div data-v-5c4d03d7 class="register">
      <div data-v-5c4d03d7 class="section">
        <div data-v-5c4d03d7 class="logo">
          <img
            data-v-5c4d03d7
            src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.3c33210.png.webp"
          >
        </div>
        <div data-v-5c4d03d7 class="title">帐号登录</div>
        <div data-v-5c4d03d7 class="outer-box">
          <div data-v-5c4d03d7 class="phone-box clearfix">
            <a data-v-5c4d03d7 href="#/chooseCountryPhoneCode?undefined">
              <div data-v-5c4d03d7 class="phone-code">
                +86
                <span class="mui-icon mui-icon-arrowdown"></span>
              </div>
            </a>
            <input
              data-v-5c4d03d7
              type="text"
              password="false"
              placeholder="请输入手机号"
              placeholder-class="phone-pld"
              class="input"
              v-model="phone"
              @blur="checkPhone"
            >
          </div>

          <div data-v-5c4d03d7 class="phone-box clearfix">
            <a data-v-5c4d03d7 href="#/chooseCountryPhoneCode?undefined">
              <div data-v-5c4d03d7 class="phone-code">密码</div>
            </a>
            <input
              data-v-5c4d03d7
              type="password"
              password="false"
              placeholder="密码"
              placeholder-class="phone-pld"
              class="input"
              v-model="password"
              @blur="checkPassword"
            >
          </div>

          <div data-v-5c4d03d7 class="os-wap-btn" @click="login">登录</div>
          <router-link to="/register" tag="div" class="os-wap-btn1">注册vivo帐号</router-link>
        </div>
        <div data-v-5c4d03d7 class="protocol-box">
          <span data-v-5c4d03d7 class="span1">忘记密码？</span>
        </div>
      </div>
      <div data-v-5c4d03d7 id="TCaptcha"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Toast, Indicator } from "mint-ui";
import axios from "../../lib/axios";
import { setCookie, getCookie } from "../../lib/cookie.js";
export default Vue.extend({
  data() {
    return {
      password: "", //..输入的密码
      phone: "", //..输入的手机号码
      isPhone: false, //手机号开关
      isPass: false //密码开关
    };
  },
  created() {
    this.$store.state.isShowHeader = false;
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie("phone")) {
      this.$router.push("/");
    }
  },
  methods: {
    // 验证所输入手机号是否正确
    checkPhone() {
      const reg = /^1[345789]\d{9}$/; //验证码手机正则
      if (this.phone == "") {
        let instance = Toast("请输入手机号码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (reg.test(this.phone)) {
        //输入正确时
        this.isPhone = true;
      } else {
        let instance = Toast("手机号码输入错误");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.phone = "";
      }
    },

    // 验证所输入密码是否正确
    checkPassword() {
      if (this.password == "") {
        let instance = Toast("请输入密码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (this.password.length >= 6 && this.password.length <= 18) {
        //输入正确时
        this.isPass = true;
      } else {
        let instance = Toast("密码长度为6-18位");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.password = "";
      }
    },

    // 账号登录
    async login() {
      if (this.phone == "" && this.password == "") {
        let instance = Toast("信息不能为空");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else {
        // 验证通过，跳转首页面
        const { g, p } = axios;
        const data = await g({
          url:
            "https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=" +
            this.phone +
            "&passwd=" +
            this.password
        });
        console.log(data);
        if (data.data.code == 200) {
          this.$store.commit("changeLogin", 1);
          this.$store.commit("getToken", this.phone);
          this.$router.push({ path: "/" });
        } else {
          // 账号或密码错误
          let instance = Toast("账号或密码错误");
          setTimeout(() => {
            instance.close();
          }, 2000);
        }
      }
    }
  }
});
</script>
<style>
body {
  background-color: white !important;
}
.register[data-v-5c4d03d7] {
  padding: 15px;
}
.register .section .logo[data-v-5c4d03d7] {
  width: 105px;
  height: 30px;
  margin: 0 auto;
  margin-top: 15px;
}
.register .section .logo img[data-v-5c4d03d7] {
  width: 105px;
  height: 30px;
  vertical-align: top;
}
.register .section .title[data-v-5c4d03d7] {
  font-family: HYQiHei-FZS;
  font-size: 18px;
  color: #252525;
  margin-top: 20px;
  text-align: center;
}
.register .section .outer-box[data-v-5c4d03d7] {
  margin-top: 40px;
}
.register .section .outer-box .country-area[data-v-5c4d03d7] {
  font-size: 16px;
  color: #666;
  line-height: 20px;
}
.register .section .country-box {
  height: 46px;
  padding-top: 15px;
  font-size: 18px;
  line-height: 30px;
  border-bottom: 1px solid #eee;
  color: #000;
}
.register .section .country-box .mui-icon {
  float: right;
}
a {
  text-decoration: none;
}

.register .section .outer-box .hint[data-v-5c4d03d7] {
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
}
.register .section .outer-box .phone-code-title[data-v-5c4d03d7] {
  font-size: 16px;
  color: #666;
  line-height: 16px;
  margin-top: 35px;
}
.register .section .outer-box .phone-box[data-v-5c4d03d7] {
  height: 53px;
  border-bottom: 0.03rem solid #f2f2f2;
  overflow: hidden;
  border-bottom: 1px solid #eee;
}
.register .section .outer-box .phone-box .phone-code[data-v-5c4d03d7] {
  width: 70px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #000;
  float: left;
  position: relative;
}
.register .section .outer-box .phone-box .input[data-v-5c4d03d7] {
  float: left;
  width: 244px !important;
  font-size: 16px;
  color: black;
  height: 50px !important;
  line-height: 60px;
  padding-top: 20px;
  padding-left: 3px;
  border: none;
}
.os-wap-btn {
  width: 340px;
  height: 40px;
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  border-radius: 30px;
  background-color: #46a1fa;
  background-image: linear-gradient(90deg, #418eff, #4566ff);
}
.os-wap-btn1 {
  width: 340px;
  height: 40px;
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #46a1fa;
  border-radius: 30px;
  background-color: white;
  border: 1px solid #46a1fa;
  background-image: linear-gradient(90deg, #fff, #fff);
}
.register .section .protocol-box[data-v-5c4d03d7] {
  margin-top: 15px;
  font-size: 0.36rem;
  text-align: center;
}
.register .section .protocol-box .span1[data-v-5c4d03d7] {
  color: #aaa;
  line-height: 0.42rem;
}
.register .section .protocol-box .span2[data-v-5c4d03d7] {
  color: #456fff;
  line-height: 0.42rem;
}
</style>
