<template>
  <div class="row footer">
    <div @click="goTo(1)" class="home col-3 m-auto">
      <img width="25px" src="../assets/images/home.png">
    </div>
    <div @click="goTo(2)" class="consult col-3 m-auto">
      <img width="25px" src="../assets/images/consult.png">
    </div>
    <div @click="goTo(3)" class="message col-3 m-auto">
      <img width="25px" src="../assets/images/message.png">
      <sup class="red" v-if="getNewMessage">{{ getNewMessage }}</sup>
    </div>
    <div @click="goTo(4)" class="mine col-3 m-auto">
      <img width="25px" src="../assets/images/mine.png">
    </div>
  </div>
</template>

<script>
import cookie from "../cookie";

export default {
  data() {
    return {};
  },
  methods: {
    goTo(index) {
      switch (index) {
        case 1: {
          this.$router.push("/home");
          break;
        }
        case 2: {
          this.$router.push("/consult");
          break;
        }
        case 3: {
          this.$router.push("/message");
          break;
        }
        case 4: {
          const token = this.$store.state.token || cookie.getCookie("token");
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
  },
  computed: {
    getNewMessage() {
      return this.$store.state.newMessages.length;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #ebebeb;
  width: 100vw;
  height: 50px;
}

.m-auto {
  text-align: center;
}

sup {
  position: absolute;
  top: 0;
}

.red {
  color: red;
}
</style>


