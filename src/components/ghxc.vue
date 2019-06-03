<template>
<div id="page">
    <v-header title="街道工作概况"></v-header>
    <div class="main ghxc">
      <img class="ghxc_title" src="../assets/images/ghxc_title.png">
      <div class="row">
        <div class="col-12 m-auto m-t-10">
          <img @click="viewDetail(1)" class="ghxc_pic" src="../assets/images/ghxc_pic01.png">
        </div>
        <div class="col-12 m-auto m-t-10">
          <img @click="viewDetail(2)" class="ghxc_pic" src="../assets/images/ghxc_pic02.png">
        </div>
        <div class="col-12 m-auto m-t-10">
          <img @click="viewDetail(3)" class="ghxc_pic" src="../assets/images/ghxc_pic03.png">
        </div>
      </div>
      <div class="ghxc_bg"></div>
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
    viewDetail(index){
      switch(index){
        case 1: 
          this.$router.push('/survey');
          break;
        case 2: 
          this.$router.push('/standard');
          break;
        case 3: 
          this.$router.push('/chaxun');
          break;
      }
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 10;
}

.ghxc {
  background: linear-gradient(#e4f0f7, #c9dae4);
}

.ghxc_bg {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/ghxc_bg.png");
  background-size: 100% auto;
  background-position: left bottom;
  background-repeat: no-repeat;
  z-index: 0;
}

.ghxc_title {
  display: block;
  margin: 25px auto 10px;
  width: 60px;
  height: 60px;
}

.ghxc_pic {
  width: 100%;
  border-radius: 6px;
}

.m-t-15 {
  margin-top: 15px !important;
}
</style>


