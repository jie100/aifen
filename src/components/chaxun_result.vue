<template>
  <div id="page">
    <v-header title="街道工作概况"></v-header>
    <div class="main chaxun">
      <div class="chaxun_box">
        <img src="../assets/images/chaxun_result_title.png" width="284px">
        <div class="chaxun_result">
          <p class="no_result" v-if="!hasResult">对不起，没有找到你要查询的小区！</p>
          <div class="result" v-else>
            <h5>社区名</h5>
            <div class="content name">{{ name }}</div>
            <h5>小区地址</h5>
            <div class="content address">{{ address }}</div>
            <h5>分类投放积分时间</h5>
            <div class="content time">{{ openTime }}</div>
            <h5>分类投放积分地点</h5>
            <div class="content place">
              <!-- {{ location }} -->
              <p v-for="place in location.split('；')" :key="place">{{ place }}</p>
            </div>
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
import api from "../store/api.js";
export default {
  components:{
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      hasResult: true,
      name: '',
      address: '',
      openTime: '',
      location: ''
    };
  },
  activated() {
    const keyWords = this.$store.state.chacun_key;
    api.chaxunXiaoQu(keyWords).then(res => {
        if (res.status === 200) {
          const data = res.data['data'];
          this.hasResult = data?true:false;
          this.name = data.name;
          this.address = data.address;
          this.openTime = data.openTime;
          this.location = data.location;
        }else{
          this.hasResult = false;
        }
      });
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.chaxun{
  overflow: auto;
}

.chaxun_box{
  position: relative;
  width: 90vw;
  margin: 15% auto;
  /* top: 50%;
  transform: translateY(-50%); */
  border-radius: 10px;
  background-color: #ff8929;
  overflow: hidden;
}

.chaxun_result_title{
  width: 284px; 
}

.chaxun_result{
  width: 90%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba( 255, 255, 255, .4 );
}

h5{
  color: white;
  height: 30px;
  line-height: 30px;
  margin: 5px auto 0;
  font-weight: bolder;
}

.content{
  min-height: 30px;
  max-height: 160px;
  line-height: 30px;
  border-radius: 10px;
  background-color: white;
  text-indent: .5em;
  overflow: auto;
}
</style>


