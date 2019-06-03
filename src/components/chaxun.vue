<template>
  <div id="page">
    <v-header title="街道工作概况"></v-header>
    <div class="main chaxun">
      <div class="chaxun_box">
        <img src="../assets/images/chaxun_home.png" width="100%">
        <div class="chaxun_home">
          <img class="chaxun_title" src="../assets/images/chaxun_title.png" >
          <div class="search_box row">
            <div class="search_input col-10">
              <input type="text" class="search_key" v-model="keyWords" placeholder="请输入查询小区名"/>
            </div>
            <div class="search_btn col-2" @click="search"> 查询 </div>
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
  components:{
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      keyWords: ''
    };
  },
  methods:{
    search(){
      if (this.keyWords.trim()) {
        this.$store.commit("setChaxunKey", this.keyWords);
        this.$router.push("/chaxun_result");
      }else{
        alert('请先输入要查询的小区名！')
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

.chaxun{
  overflow: auto;
}

.chaxun_box{
  position: relative;
  width: 90vw;
  margin: 15% auto;
  border-radius: 10px;
}

.chaxun_home{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.chaxun_title{
  display: block;
  width: 80%;
  margin: -40px auto 0;
}

.search_box{
  margin: 15px auto;
  width: 85%;
  height: 30px;
  border-radius: 10px;
  background-color: #ff8929;
  overflow: hidden;
}

.search_input{
  border-radius: 10px;
  height: 100%;
  background-color: white;
}

.search_key{
  width: 100%;
  outline: none;
  background: none;
  border: transparent;
  height: 100%;
}

.search_btn{
  padding: 0;
  text-align: center;
  height: 100%;
  line-height: 30px;
  color: white;
}
</style>


