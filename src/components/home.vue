
<template>
  <div class="home">
    <div class="homepage">
      <div class="row m-auto search" style="text-align:left;">
        <div class="col-9 ml-auto search_box">
          <i class="fa fa-search" aria-hidden="true" @click="search"></i>
          <input type="text" class="search_input" v-model="keyWords">
        </div>
        <div class="col-2 message_tip">
          <img class="message" src="../assets/images/message_tip.png" @click="checkMessage">
          <sup v-if="hasMessage" class="message_sup"></sup>
        </div>
      </div>
      <div class="m-auto kinds_box">
        <div class="row kinds">
          <div class="col-4 m-auto kind">
            <img @click="goNext(1)" class="kind_pic" src="../assets/images/kind01.png">
            <p @click="goNext(1)" class="kind_title">{{ kindList[0] }}</p>
          </div>
          <div class="col-4 m-auto kind">
            <img @click="goNext(2)" class="kind_pic" src="../assets/images/kind02.png">
            <p @click="goNext(2)" class="kind_title">{{ kindList[1] }}</p>
          </div>
          <div class="col-4 m-auto kind">
            <img @click="goNext(3)" class="kind_pic" src="../assets/images/kind03.png">
            <p @click="goNext(3)" class="kind_title">{{ kindList[2] }}</p>
          </div>
        </div>
        <div class="row kinds">
          <div class="col-4 m-auto kind">
            <img @click="goNext(4)" class="kind_pic" src="../assets/images/kind04.png">
            <p @click="goNext(4)" class="kind_title">{{ kindList[3] }}</p>
          </div>
          <div class="col-4 m-auto kind">
            <img @click="goNext(5)" class="kind_pic" src="../assets/images/kind05.png">
            <p @click="goNext(5)" class="kind_title">{{ kindList[4] }}</p>
          </div>
          <div class="col-4 m-auto kind">
            <img @click="goNext(6)" class="kind_pic" src="../assets/images/kind06.png">
            <p @click="goNext(6)" class="kind_title">{{ kindList[5] }}</p>
          </div>
        </div>
        <div class="row m-auto logo_box">
          <div class="col-4">
            <img class="logo" src="../assets/images/logo01.png">
          </div>
          <div class="col-4">
            <img class="logo" src="../assets/images/logo02.png">
          </div>
          <div class="col-4">
            <img class="logo_lg" src="../assets/images/logo03.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../store/api";
import cookie from "../cookie";

export default {
  data() {
    return {
      hasMessage: false,
      keyWords: "",
      kindList: [
        "上海垃分知识",
        "共和新垃分",
        "垃分简讯",
        "成员风采",
        "互动消息",
        "个人中心"
      ]
    };
  },
  activated() {
    const token = this.$store.state.token || cookie.getCookie("token");
    if (token) {
      api.reply().then(res => {
        if (res.status === 200) {
          const messages = res.data;
          this.$store.commit("setNewMessage", messages);
          if (messages && messages.length > 0) {
            this.hasMessage = true;
          } else {
            this.hasMessage = false;
          }
        }
      });
    }
  },
  methods: {
    search() {
      if (this.keyWords.trim()) {
        this.$store.commit("setKeyWords", this.keyWords);
        this.$router.push("/list");
      }
    },
    checkMessage() {
      this.$router.push("./message");
    },
    goNext(num) {
      switch (num) {
        case 1:
          this.$router.push("/sha");
          break;
        case 2:
          this.$router.push("/ghxc");
          break;
        case 3:
          this.$router.push("/consult");
          break;
        case 4:
          this.$router.push("/member");
          break;
        case 5:
          this.$router.push("/message");
          break;
        case 6:
          const token = this.$store.state.token;
          if (token) {
            this.$router.push("/personal");
          } else {
            alert("请先登录");
            this.$router.push("/login");
          }
          break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 0;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.home {
  width: 100%;
  height: calc(100% - 50px);
  overflow: auto;
}

.homepage {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-image: url("../assets/images/home_bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}

.search {
  width: 80vw;
  height: 30px;
  margin-top: 20px !important;
}

.search_box {
  height: 100%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 15px;
}

.fa-search {
  color: lightgray;
}

.search_input {
  margin-left: 0.5em;
  background-color: transparent;
  border: none;
  width: calc(100% - 35px);
  height: 100%;
  outline: none;
}

.m-auto {
  text-align: center;
}

.message_tip {
  padding: 0 !important;
}

.message {
  width: 26px;
  display: block;
  margin-left: auto;
  margin-top: 2px;
}

.message_sup {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border: 5px solid red;
  border-radius: 50%;
}

.kinds_box {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  height: 180px;
}

.kinds {
  width: 100%;
  height: 50%;
}

.kind{
  padding: 0;
}

.logo_box {
  width: 60%;
  height: 20px;
}

.kind_pic {
  width: 50px;
}

.kind_title {
  font-size: 12px;
  color: #00a370;
  line-height: 2em;
}

.logo {
  width: 16px;
  margin-bottom: 6px;
}

.logo_lg {
  width: 32px;
  margin-bottom: 6px;
}
</style>
