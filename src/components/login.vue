<template>
  <div class="login">
    <div class="login_in">
      <img class="login_title" src="../assets/images/login_title.png">
      <!-- <div class="register_btn fz-14" @click="goRegister">注册</div> -->
      <div class="head_frame m-auto" style="opacity:0;">
        <!-- <img class="head_pic" src="../assets/images/head.png"> -->
      </div>
      <div class="login_info m-t-15">
        <div class="row user_name">
          <div class="col-2 user_cion">
            <!-- <i class="fa fa-user" aria-hidden="true"></i> -->
            <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>
          </div>
          <div class="col-8">
            <input
              class="user_id"
              type="text"
              maxlength="11"
              v-inputmask="controlNumber"
              placeholder="请输入手机号"
              v-model="userInfo.phone"
            >
          </div>
        </div>
        <div class="row password">
          <div class="col-2 pw_icon">
            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
          </div>
          <div class="col-5">
            <!-- <input
              class="pw_content"
              v-if="openPw"
              type="text"
              placeholder="请输入密码"
              v-model="userInfo.password"
            >-->
            <input
              class="pw_content"
              v-if="!openPw"
              type="text"
              placeholder="请输入验证码"
              v-model="userInfo.code"
            >
          </div>
          <div class="col-5 pw_eyes">
            <!-- <i @click="togglePw" v-if="!openPw" class="fa fa-eye" aria-hidden="true"></i>
            <i @click="togglePw" v-if="openPw" class="fa fa-eye-slash" aria-hidden="true"></i>-->
            <span class="get_code fz-12" v-if="!hasCode" @click="getCode">获取验证码</span>
            <span class="get_code fz-12" v-if="hasCode">{{ this.current + "s" }}</span>
          </div>
        </div>
        <dir class="row tips">
          <div class="col-2 pw_icon"></div>
          <div class="col-8">未注册的手机号将自动创建账号</div>
        </dir>
        <div class="row">
          <div @click="login" class="col-8 m-auto login_btn">登录</div>
        </div>
        <!-- <div class="row">
        <div class="col-8 m-auto forget_pw">忘记密码？</div>
        </div>-->
      </div>
      <!-- <div class="row m-auto loginBy">
      <div class="col-6">
        <i class="fa fa-wechat" aria-hidden="true"></i>
      </div>
      <div class="col-6">
        <i class="fa fa-qq" aria-hidden="true"></i>
      </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import api from "../store/api.js";
import cookie from "../cookie";
import inputmask from "../directives/input_value.js";

export default {
  directives: {
    inputmask
  },
  data() {
    return {
      openPw: false,
      userInfo: {
        code: "",
        phone: ""
      },
      current: 100,
      hasCode: false
    };
  },
  mounted(){
    this.userInfo.phone = cookie.getCookie("phone")?cookie.getCookie("phone"):"";
  },
  computed: {
    
  },
  methods: {
    countDown() {
      const self = this;
      let timer = setInterval(function() {
        self.current --;
        if (self.current < 0) {
          clearInterval(timer);
          self.current = 100;
          self.hasCode = false;
        }
      }, 1000);
    },
    controlNumber() {
      const reg = /^1\d{0,10}$/;
      if (!reg.test(this.userInfo.phone)) {
        this.userInfo.phone = this.userInfo.phone.substring(
          0,
          this.userInfo.phone.length - 1
        );
      }
    },
    togglePw() {
      this.openPw = !this.openPw;
    },
    goRegister() {
      this.$store.commit("setFooter", false);
      this.$router.push("/register");
    },
    getCode() {
      const reg = /^1[34578]\d{9}$/;
      const phone = this.userInfo.phone;
      if (!phone) {
        alert("请先输入手机号！");
      } else if (!reg.test(phone)) {
        alert("手机号码不正确！");
      } else {
        api.getCode(phone).then(res => {
          if (res.data && res.data.code === 200) {
            this.hasCode = true;
            this.countDown();
          }
        });
      }
    },
    login() {
      const userInfo = this.userInfo;
      api.login(userInfo).then(res => {
        if (res.status === 200) {
          if( res.data && res.data.message === "请补全信息" ){
            this.$store.commit('setPhone', userInfo.phone);
            this.$router.push("/register");
          }else if( !res.data || res.data.message !== "请补全信息" ){
            this.$store.commit("setToken", res.data.token);
            this.$store.commit("setUserName", res.data.name);
            cookie.setCookie("phone", userInfo.phone);
            cookie.setCookie("token", res.data.token);
            this.$router.push("/home");
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.fz-14 {
  font-size: 14px;
}

.login {
  width: 100vw;
  height: calc(100% - 50px);
  overflow: auto;
}

.login_in {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
}

.tips {
  color: gray;
  margin-top: 5px;
  font-size: 10px;
}

.m-auto {
  text-align: center;
}

.login_title {
  width: 100%;
}

.register_btn {
  position: absolute;
  top: 30px;
  right: 15px;
  width: 50px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: 1px solid white;
  border-radius: 15px;
  color: white;
  background: none;
  outline: none;
}

.head_frame {
  margin-top: 30px !important;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.4);
}

.head_pic {
  width: 100%;
}

.user_name,
.password {
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 10px 0 !important;
}

.user_cion,
.pw_icon {
  text-align: right;
  padding-right: 0 !important;
  line-height: 30px;
  color: gray;
}

.user_id,
.pw_content {
  border: none;
  background: none;
  outline: none;
  height: 100%;
  width: 100%;
}

.pw_eyes {
  padding-left: 0 !important;
  line-height: 30px;
  color: gray;
}

.login_btn {
  margin-top: 20px !important;
  background-color: #00a370;
  color: white;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
}

.forget_pw {
  font-size: 12px;
  text-align: right !important;
  padding-right: 0;
  margin-top: 5px !important;
}

.loginBy {
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: lightgray;
  font-size: 30px;
  padding-bottom: 15px;
}

.get_code {
  color: white;
  background-color: #00a370;
  padding: 4px 10px;
  border-radius: 10px;
}
</style>


