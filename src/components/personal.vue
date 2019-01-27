<template>
  <div class="main personal">
    <div class="row m-auto personal_center">
      <!-- <div class="col-4 max_width_72">
        <img width="72px" src="../assets/images/head.png">
      </div>-->
      <div class="col-8 wechat_info">
        <div class="wechat_name">{{ getUserName }}</div>
        <!-- <span class="wechat_code">{{ '微信号: ' + wechat.code }}</span> -->
      </div>
    </div>

    <div class="row personal_message">
      <div class="col-3 max_width_22">
        <img width="22px" src="../assets/images/message.png">
      </div>
      <div class="interact">
        <span>互动留言</span>
        <sup v-if="getNewMessage" class="message_sup"></sup>
      </div>
    </div>

    <div class="row ml-auto message_tip" v-if="getNewMessage" @click="checkMessage">
      <div class="col-10">{{ "您收到"+ getNewMessage + "条互动留言消息" }}</div>
      <div class="col-2">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
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
</template>

<script>
import api from "../store/api";
export default {
  methods: {
    checkMessage() {
      this.$router.push("./message");
    }
  },
  mounted() {
    api.reply().then(res => {
      if (res.status === 200) {
        const messages = res.data;
        this.$store.commit("setNewMessage", messages);
      }
    });
  },
  computed: {
    getNewMessage() {
      return this.$store.state.newMessages.length;
    },
    getUserName() {
      return this.$store.state.userName;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.personal {
  background-color: #f4f4f4;
}

.personal_center {
  width: 100%;
  padding: 25px 10px;
  background-color: #00a370;
}

.max_width_72 {
  max-width: 102px;
}
.wechat_info {
  padding-left: 0 !important;
  padding-top: 12px;
}

.wechat_name {
  color: white;
  font-size: 16px;
  font-weight: bold;
}
.wechat_code {
  color: white;
  font-size: 12px;
}

.max_width_22 {
  max-width: 52px;
  height: 22px;
  overflow: hidden;
}

.personal_message {
  padding: 15px 0;
  border-bottom: 1px solid #f4f4f4;
  background-color: white;
}

.interact {
  height: 22px;
  line-height: 22px;
  position: relative;
  margin-left: -8px;
}

.message_sup {
  position: absolute;
  top: -2px;
  right: -10px;
  width: 0;
  height: 0;
  border: 4px solid red;
  border-radius: 50%;
}

.message_tip {
  color: lightgray;
  padding-left: 5vw !important;
  font-size: 12px;
  padding: 10px 0;
  background-color: white;
}

.logo {
  width: 16px;
  margin-bottom: 6px;
}

.logo_lg {
  width: 32px;
  margin-bottom: 6px;
}

.logo_box {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 20px;
  text-align: center;
}
</style>


