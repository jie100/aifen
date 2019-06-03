<template>
  <div id="page">
    <v-header title="上海垃圾分类知识"></v-header>
    <div class="main fenlei">
      <div class="fenlei_box">
        <img class="fenlei_result" width="100%" :src="imgSrc">
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
      imgSrc: '',
    };
  },
  activated() {
    const index = this.getIndex;
    switch ( index ) {
      case 1: 
        this.imgSrc = require('../assets/images/dry.jpg');
        break;
      case 2:
        this.imgSrc = require('../assets/images/recyclable.jpg');
        break;
      case 3:
        this.imgSrc = require('../assets/images/harmful.jpg');
        break;
      case 4:
        this.imgSrc = require('../assets/images/wet.jpg');
        break;
    }
  },
  computed: {
    getIndex(){
      return this.$store.state.fenlei_index
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}
.fenlei_box{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.fenlei_result{
  width: 100%;
  margin: 0 auto;
  display: block;
}
</style>


