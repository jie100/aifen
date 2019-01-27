<template>
  <div class="register">
    <div class="register_title">
      <img width="194px" src="../assets/images/register.png">
      <!-- <p>成为社会环保卫士</p> -->
    </div>

    <div class="register_info">
      <div class="row info_box name">
        <div class="col-1 padding-0">
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </div>
        <div class="col-10 padding-0">
          <input class="input_box" type="text" placeholder="请输入昵称" v-model="userInfo.name">
        </div>
        <div class="col-1 padding-0">*</div>
      </div>
      <!-- <div class="row info_box password">
        <div class="col-1 padding-0">
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
        </div>
        <div class="col-10 padding-0">
          <input
            class="input_box"
            type="password"
            placeholder="请输入登录密码"
            v-model="userInfo.password"
          >
        </div>
        <div class="col-1 padding-0">*</div>
      </div> 
      <div class="row info_box confirmPassword">
        <div class="col-1 padding-0">
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
        </div>
        <div class="col-10 padding-0">
          <input
            class="input_box"
            type="password"
            placeholder="请再确认登录密码"
            v-model="userInfo.confirmPassword"
          >
        </div>
        <div class="col-1 padding-0">*</div>
      </div>
      <div class="row info_box phone">
        <div class="col-1 padding-0">
          <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>
        </div>
        <div class="col-10 padding-0">
          <input class="input_box" type="text" placeholder="请输入手机号" v-model="userInfo.phone">
        </div>
        <div class="col-1 padding-0">*</div>
      </div> -->
      <div class="row info_box street">
        <div class="col-1 padding-0">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div class="col-11 padding-0">
          <input
            class="input_box"
            type="text"
            placeholder="请输入街道名(例如:快乐街道)"
            v-model="userInfo.street"
          >
        </div>
      </div>
      <div class="row info_box street">
        <div class="col-1 padding-0">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div class="col-11 padding-0">
          <input
            class="input_box"
            type="text"
            placeholder="请输入小区名(例如:幸福小区)"
            v-model="userInfo.quarter"
          >
        </div>
      </div>
      <dir class="row tips">标记 * 选项为必填项</dir>
    </div>
    <div class="row btn_box">
      <button class="register_btn fz-14" @click="register">完成注册</button>
    </div>
  </div>
</template>

<script>
import api from "../store/api.js";
import axios from "axios";
import cookie from '../cookie'

export default {
  data() {
    return {
      userInfo: {
        name: "",
        //password: "",
        //confirmPassword: "",
        phone: "",
        street: "",
        quarter: ""
      }
    };
  },
  methods: {
    togglePw() {
      this.openPw = !this.openPw;
    },
    register() {
      const registerRequest = this.userInfo;
      registerRequest.phone = this.$store.state.phone;
      if ( !registerRequest.name ){
        alert("请输入昵称！");
      }else {
        api.register(registerRequest).then(res => {
          if (res.status === 200) {
            const data = res.data;
            this.$store.commit("setFooter", true);
            this.$store.commit("setToken", data.token);
            this.$store.commit("setUserName", data.name);
            cookie.setCookie("token", data.token);
            cookie.setCookie("name", data.name);
            this.$router.push("/home");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.padding-0 {
  padding: 0;
}

.register {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: #00a370;
  overflow: hidden;
}

.register_title {
  margin: 95px 0 0 24px;
  font-size: 16px;
  color: white;
}

.register_info {
  padding: 24px;
  overflow: hidden;
}

.info_box {
  height: 40px;
  color: white;
  border-bottom: 1px solid #0e0e0e;
  margin-top: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}

.input_box {
  background: none;
  border: 0;
  color: white;
  outline: none;
  width: 100%;
  height: 100%;
  line-height: 40px;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: white;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: white;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: white;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}

.tips {
  color: white;
  margin-top: 5px;
  font-size: 10px;
}

.btn_box {
  padding: 15px 35px;
}

.register_btn {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  color: #00a370;
  background-color: white;
  outline: none;
  border: 0;
}
</style>


