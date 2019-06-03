<template>
  <div id="page">
    <v-header title="搜索结果"></v-header>
    <div class="main member">
      <div class="m-t-15 fz-14" style="text-align:center;" v-if="!hasContent">对不起，没有找到你要搜索的文章</div>
      <div class="member_content" ref="list">
        <ul class="member_content_list" ref="scroll_box">
          <li class="content_box" v-for="member in members" :key="member.contentId">
            <div class="row" @click="viewDetail(member.contentId, member.contentUrl)">
              <div class="col-8">
                <div class="fz-14">{{ member.titleName }}</div>
                <div class="else_info">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>{{ member.createTime }}</span>
                  <i class="fa fa-eye m_l_10" aria-hidden="true"></i>
                  <span>{{ member.clicks }}</span>
                </div>
              </div>
              <div class="col-4" style="min-height:50px">
                <img class="member_img" width="100%" :src="member.titleUrl">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
import header from "@/components/header";
import api from "../store/api.js";
//import Time from "../directives/time.js";

export default {
  components:{
    "v-header": header,
    "v-footer": footer
  },
  // directives: {
  //   Time
  // },
  data() {
    return {
      members: [],
      imgPrePath: "http://39.98.78.200:8080/ofcms-admin",
      keyWords: this.$store.state.keyWords,
      hasContent: false
    };
  },
  mounted() {
    this.keyWords = this.$store.state.keyWords;
    this.$store.commit('setKeyWords', this.keyWords);
    this.toSearch(this.keyWords);
  },
  activated() {
    const keyWords = this.$store.state.keyWords;
    if (keyWords !== this.keyWords) {
      api.toSearch(keyWords);
    }
  },
  methods: {
    formatDate(date) {
      let lastdate = new Date(date);
      return lastdate.getTime();
    },
    toSearch(keyWords){
      api.search(keyWords, 100).then(res => {
        let contents = [];
        if (res.status === 200) {
          contents = res.data.collection;
          if (contents.length > 0) {
            this.hasContent = true;            
            contents.forEach(item => {
              //item.createTime = this.formatDate(item.createTime);
              item.titleUrl = this.imgPrePath + item.titleUrl;
            });
            this.members = this.members.concat(contents);
          } else {
            this.hasContent = false;
          }
        }
      });
    },
    viewDetail(id, url) {
      if(url&&url.length>0){
        window.open(url);
        // this.$store.commit("setIframeUrl", url);
        // this.$router.push("/out_view");
      }else{
        this.$store.commit("setTitle", "文章详情");
        this.$store.commit("setArticleRequestId", id);
        this.$router.push("/article");
      }
    }
  },
  destroyed() {
    this.keyWords = this.$store.state.keyWords
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.member_content {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.content_box {
  padding: 15px 0;
  border-bottom: 1px solid lightgray;
}

.else_info {
  position: absolute;
  left: 15px;
  bottom: 0;
  font-size: 12px;
  color: lightgray;
}

.m_l_10 {
  margin-left: 10px;
}
</style>


