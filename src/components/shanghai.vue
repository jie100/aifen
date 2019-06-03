<template>
  <div id="page">
    <v-header title="上海垃圾分类知识"></v-header>
    <div class="main shanghai">
      <div class="shanghai_content">
        <img class="shanghai_title" src="../assets/images/sha_title.jpg">
        <div class="row">
          <div class="col-12 m-auto m-t-15">
            <img class="shanghai_pic" @click="goTo" src="../assets/images/sha_pic01.png">
          </div>
          <div class="col-12 m-auto m-t-15">
            <a href="http://weixin.sh-service.com/sites/feiguan/trashTypes_2/TrashQuery.aspx">
              <img class="shanghai_pic" src="../assets/images/sha_pic02.png">
            </a>
          </div>
          <div class="col-12 m-auto m-t-15">
            <a href="https://web.shobserver.com/thirdParty/recycling50_ver06/index.html">
              <img class="shanghai_pic" src="../assets/images/sha_pic03.png">
            </a>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
import header from "@/components/header";
export default {
  data() {
    return {};
  },
  components:{
    "v-header": header,
    "v-footer": footer
  },
  methods: {
    goTo() {
      this.$router.push("/fenlei");
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


