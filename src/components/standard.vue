<template>
  <div id="page">
    <v-header title="街道工作概况"></v-header>
    <div class="main page">
      <h5 class="page_title green">生活垃圾分类达标要求</h5>
      <div class="standard standard01">
        <img class="standard_pic" src="../assets/images/pdf01.png">
        <p class="standard_title fz-12 m-t-15">《上海市生活垃圾分类达标社区考评办法（试行）》</p>
        <span class="download fz-12 fw-bold" @click="viewStandard(1)" >点击查看</span>
      </div>
      <div class="standard standard01">
        <img class="standard_pic" src="../assets/images/pdf02.png">
        <p class="standard_title fz-12 m-t-15">《上海市生活垃圾分类达标单位考评办法（试行）》</p>
        <span class="download fz-12 fw-bold" @click="viewStandard(2)" >点击查看</span>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
import header from "@/components/header";

export default {
  components:{
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      
    };
  },
  methods: {
    viewStandard(index) {
      this.$store.commit('setStandardIndex',index)
      this.$router.push('/standard_view');
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.page{
  overflow: auto;
}

.page_title{
  margin: 50px auto 0;
  text-align: center;
}

.standard{
  margin: 36px auto auto;
  text-align: center;
}

.standard_pic{
  width: 100px;
}

.download{
  text-decoration: underline;
  color: #ff9c4b;
}
</style>


