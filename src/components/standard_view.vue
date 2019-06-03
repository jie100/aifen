<template id="img">
  <div id="page">
    <v-header title="街道工作概况"></v-header>
    <div class="main fenlei">
      <div class="fenlei_box">
        <img class="fenlei_result" width="100%" :src="imgSrc">
        <p class="tips">温馨提示：长按保存图片更方便阅读哦！</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
import header from "@/components/header";

export default {
  components: {
    "v-header": header,
    "v-footer": footer,
  },
  data() {
    return {
      imgSrc: '',
    };
  },
  activated() {
    const index = this.$store.state.standard_index;
    switch (index) {
      case 1:
        this.imgSrc = require("../assets/images/standards/standard01.png");
        break;
      case 2:
        this.imgSrc = require("../assets/images/standards/standard02.png");
        break;
    }
  },
  computed: {
    getIndex() {
      return this.$store.state.standard_index;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}
.tips{
  width: 100%;
  line-height: 40px;
  font-size: 12px;
  text-align: center
}
.fenlei_box {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.fenlei_result {
  width: 100%;
  margin: 0 auto;
  display: block;
}
</style>


