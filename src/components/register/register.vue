<template>
  <div id="register">
    <div data-v-5c4d03d7 class="register" v-show="isShow">
      <div data-v-5c4d03d7 class="section">
        <div data-v-5c4d03d7 class="logo">
          <img
            data-v-5c4d03d7
            src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.3c33210.png.webp"
          >
        </div>
        <div data-v-5c4d03d7 class="title">帐号注册</div>
        <div data-v-5c4d03d7 class="outer-box">
          <div data-v-5c4d03d7 class="country-area">国家地区</div>
          <router-link to="/choice" tag="a">
            
            <div data-v-5c4d03d7 class="country-box" @click="loading" >
              {{this.$route.query.name}}
              <span class="mui-icon mui-icon-arrowdown"></span>
            </div>
          </router-link>
          <div data-v-5c4d03d7 class="hint">成功注册帐号后，国家／地区将不能被修改</div>
          <div data-v-5c4d03d7 class="phone-code-title">手机号码</div>
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
          <div data-v-5c4d03d7 class="os-wap-btn" @click="next">下一步</div>
        </div>
        <div data-v-5c4d03d7 class="protocol-box">
          <span data-v-5c4d03d7 class="span1">我已阅读并接受</span>
          <a data-v-5c4d03d7 class="span2">《vivo服务协议》</a>
        </div>
      </div>
      <div data-v-5c4d03d7 id="TCaptcha"></div>
    </div>
    <!-- 第二页 -->
    <div data-v-5c4d03d7 class="register" v-show="!isShow">
      <div data-v-5c4d03d7 class="section">
        <div data-v-5c4d03d7 class="title">设置密码</div>
        <div data-v-5c4d03d7 class="outer-box">
          <div data-v-5c4d03d7 class="phone-box clearfix">
            <div data-v-5c4d03d7 class="phone-code">验证码</div>

            <input
              data-v-5c4d03d7
              type="text"
              password="false"
              placeholder="请输入短信验证码"
              placeholder-class="phone-pld"
              class="input"
              @blur="checkPCode"
              v-model="sendcode"
            >
            <input
              data-v-5c4d03d7
              id="send_code"
              type="button"
              value="获取验证码"
              password="false"
              :disabled="disabled"
              v-if="disabled==false"
              @click="Sendcode"
            >
            <input
              data-v-5c4d03d7
              id="send_code"
              type="button"
              password="false"
              :value="btntxt"
              :disabled="disabled"
              v-if="disabled==true"
              @click="Sendcode"
            >
          </div>
          <div data-v-5c4d03d7 class="hint">验证码短信将发送至{{this.phone}}</div>

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
          <div data-v-5c4d03d7 class="hint">密码必须为8-16位字母和数字组合</div>
          <div data-v-5c4d03d7 class="os-wap-btn" @click="register">完成</div>
        </div>
        <div data-v-5c4d03d7 class="protocol-box">
          <span data-v-5c4d03d7 class="span1">短信可能会有延时，请耐心等待，如果长时间未收到短信，请60秒后重新获取。</span>
        </div>
      </div>
      <div data-v-5c4d03d7 id="TCaptcha"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import $ from "jquery";
import { Toast, Indicator } from "mint-ui";
import axios from "../../lib/axios";
import { setCookie, getCookie } from "../../lib/cookie.js";
export default Vue.extend({
  data() {
    return {
      isShow: true,
      btntxt: "重新发送",
      sendcode: "", //..输入的手机验证码
      time: 0,
      disabled: false,
      code: "",
      checkCode: "",
      password: "", //..输入的密码
      phone: "", //..输入的手机号码
      isPhone: false, //手机号开关
      isPass: false, //密码开关
      isPCode: false, //手机验证码开关
    };
  },
  created() {
    this.$store.state.isShowHeader = false;
  },
  methods: {
    // 加载
    loading() {
      this.isShow = false
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        Indicator.close();
      }, 1000);
    },
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
    // 点击跳转下一页
    next() {
      if (this.isPhone) {
        this.isShow = false;
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
    // 发送验证码
    //手机验证发送验证码
    Sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "") {
        let instance = Toast("手机号不能为空");
        setTimeout(() => {
          instance.close();
        }, 2000);
        return;
      }
      if (!reg.test(this.phone)) {
        let instance = Toast("请输入正确的手机号");
        setTimeout(() => {
          instance.close();
        }, 2000);
        return;
      } else {
        // 发送短信的接口

        //短信模板Id（需要申请，详情看上面申请步骤）
        var $model_Id = "158579";
        //您的验证码是#code# 随机的6位数
        var $tpl_value = "%23code%23%3D" + this.numRandom();
        //截取后面6位数验证码
        var registerCode = $tpl_value.substring(
          $tpl_value.length - 6,
          $tpl_value.length
        );
        // console.log($tpl_value,code)
        //获取AppKey（需要申请）
        var $AppKey = "47fd7a0f19956bca07adb53e4c3bccb8";
        // 请求接口
        $.get({
          url: "http://v.juhe.cn/sms/send",
          data: {
            mobile: this.phone,
            tpl_id: $model_Id,
            tpl_value: $tpl_value,
            key: $AppKey
          },
          dataType: "jsonp",
          success: function(obj) {
            console.log(obj);
            setCookie("registerCode", registerCode, 60);//把验证码存到cookie
          }
        });

        let instance = Toast("发送成功");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    // 验证所输入手机验证码是否正确
    checkPCode() {
      var registerCode = getCookie("registerCode"); //获取注册的手机验证码
      if (this.sendcode == registerCode) {
        //输入正确时
        this.isPCode = true;
      } else {
        let instance = Toast("手机验证码不匹配");
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
    /**
     * 生成随机的6位数验证码
     */
    numRandom() {
      var num = "";
      for (var i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
      }
      return num;
    },
    //60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    // 点击注册
    async register() {
      if (this.isPass && this.isPhone && this.isPCode) {
        // 验证通过，跳转登录页面
        const { g, p } = axios;
        const data = await g({
          url:
            "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=" +
            this.phone +
            "&passwd=" +
            this.password
        });
        // console.log(data)
        this.$router.push({ path: "/login" });
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
.register .section .outer-box .phone-box #send_code {
  width: 90px;
  height: 44px;
  font-size: 14px;
  color: #333;
  text-align: center;
  position: absolute;
  top: 100px;
  right: 15px;
  border: none;
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
  font-size: 18px;
  color: #000;
  float: left;
  position: relative;
}
.register .section .outer-box .phone-box .input[data-v-5c4d03d7] {
  float: left;
  width: 244px !important;
  font-size: 15px;
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
