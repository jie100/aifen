<template>
  <div id="page">
    <v-header title="上海垃圾分类知识"></v-header>
    <div class="main fenlei">
      <div class="fenlei_box">
        <img class="fenlei_title" width="100%" src="../assets/images/fenlei_title.jpg">
        <div class="fenlei_btns">
          <img class="fenlei_btn" width="100%" src="../assets/images/fenlei_btn.jpg">
          <div class="btns row">
            <div class="col-3 btn" @click="goTo(1)"></div>
            <div class="col-3 btn" @click="goTo(2)"></div>
            <div class="col-3 btn" @click="goTo(3)"></div>
            <div class="col-3 btn" @click="goTo(4)"></div>
          </div>
        </div>
        <p class="fenlei_tip">分类知识信息来源：《上海生活垃圾分类管理条例》第一章第四条</p>
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
    goTo(index){
      this.$store.commit('setFenLeiIndex',index)
      this.$router.push('/fenlei_result');
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.fenlei{
  background-color: #ecd5b7;
}
.fenlei_box{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.fenlei_title{
  width: 75vw;
  margin: 15px auto 0;
  display: block;
}
.fenlei_btns{
  position: relative;
  margin: 0 auto;
  width: 88.75vw;
}
.fenlei_tip{
  text-align: center;
  color: white;
  font-size: 10px;
  line-height: 18px;
}
.btns{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.btn{
  height: 100%;
}
</style>


