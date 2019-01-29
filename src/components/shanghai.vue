<template>
  <div class="main shanghai">
    <div class="shanghai_content">
      <img class="shanghai_title" src="../assets/images/sha_title.jpg">
      <div class="row">
        <div class="col-12 m-auto m-t-15">
          <img class="shanghai_pic" @click="goTo(1)" src="../assets/images/sha_pic01.jpg">
        </div>
        <div class="col-12 m-auto m-t-15">
          <img class="shanghai_pic" @click="goTo(2)" src="../assets/images/sha_pic02.jpg">
        </div>
        <div class="col-12 m-auto m-t-15">
          <img class="shanghai_pic" @click="goTo(3)" src="../assets/images/sha_pic03.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(index) {
      switch (index) {
        case 1: {
          this.$store.commit("setSubTitle", "上海垃圾分类四分类知识");
          this.$store.commit(
            "setShangHaiBanner",
            require("../assets/images/shanghai/classify.jpg")
          );
          this.$router.push("/shanghai_article");
          break;
        }
        case 2: {
          this.$store.commit("setSubTitle", "垃圾去哪了");
          this.$store.commit(
            "setShangHaiBanner",
            require("../assets/images/shanghai/where.jpg")
          );
          this.$router.push("/shanghai_article");
          break;
        }
        case 3: {
          this.$store.commit("setSubTitle", "垃圾分类的价值");
          this.$store.commit(
            "setShangHaiBanner",
            require("../assets/images/shanghai/value.jpg")
          );
          this.$router.push("/shanghai_article");
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.m-auto {
  text-align: center;
}

.shanghai{
  overflow: auto!important;
}

.shanghai_content{
  height: 100%;
  min-height: 450px;
}

.shanghai_title {
  width: 100%;
}

.shanghai_pic {
  width: 100%;
  border-radius: 6px;
}

.m-t-15 {
  margin-top: 15px !important;
}
</style>


