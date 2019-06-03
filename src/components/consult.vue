<template>
  <div id="page">
    <v-header title="简讯推送"></v-header>
    <div class="main consult" ref="consult">
      <div class="row subheader">
        <div class="title col-9 m-auto">
          <div class="row col-11 m-auto">
            <div @click="changToCurrent('hot')" class="col-6 subtitle" :class="active?'active':''">简讯报道</div>
            <div @click="changToCurrent('related')" class="col-6 subtitle" :class="!active?'active':''">街道报道</div>
          </div>
        </div>
      </div>
      <!-- <img class="consult_banner" ref="banner" src="../assets/images/consult.jpg"> -->
      <div class="consult_content" ref="list">
        <ul class="consult_content_list" ref="list_in">
          <li class="content_box" v-for="consult in getConsults" :key="consult.contentId">
            <div class="row" @click="viewDetail(consult.contentId, consult.contentUrl)">
              <div class="col-8 article_title">
                <div class="fz-14 title_box">{{ consult.titleName }}</div>
                <div class="else_info">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>{{ consult.createTime }}</span>
                  <i class="fa fa-eye m_l_10" aria-hidden="true"></i>
                  <span>{{ consult.clicks }}</span>
                </div>
              </div>
              <div class="col-4" style="min-height:50px">
                <img class="member_img" width="100%" :src="consult.titleUrl">
              </div>
            </div>
          </li>
        </ul>
        <div class="loading" v-if="loading">
          <i class="fa fa-spinner fa-lg transform" aria-hidden="true"></i>
          <span>Loading</span>
        </div>
        <div class="loading fz-12" v-if="end">已经到底啦！</div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
import api from "../store/api.js";
//import Time from "../directives/time.js";
import requestId from "../store/request_id.js";

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
      consults: [],
      active: true,
      //height_calc: "",
      pageTitle: "",
      pageNumber: 1,
      imgPrePath: "http://39.98.78.200:8080/ofcms-admin",
      totalPages: 0,
      loading: false,
      end: false
    };
  },
  mounted() {
    const id = requestId.listId.consult_hot;
    this.toGetArticleList(id, this.pageNumber);
  },
  activated() {
    const list = this.$refs.list;
    const id =
      this.pageTitle === "简讯报道"
        ? requestId.listId.consult_hot
        : requestId.listId.consult_related;
    list.addEventListener("scroll", () => {
      let listFixedHeight = list.offsetHeight;
      let scrollHeight = this.$refs.list_in.offsetHeight;
      let dyHeight = scrollHeight - listFixedHeight - 10;
      if (
        list.scrollTop >= dyHeight &&
        this.pageNumber <= this.totalPages &&
        !this.loading
      ) {
        this.toGetArticleList(id, this.pageNumber);
      } else if (this.pageNumber > this.totalPages) {
        this.end = true;
      }
    });
  },
  computed: {
    getConsults() {
      return this.consults;
    }
  },
  methods: {
    formatDate(date) {
      let lastdate = new Date(date);
      return lastdate.getTime();
    },
    toGetArticleList(id, pageNumber) {
      this.loading = true;
      this.end = false;
      api.getArticlrList(id, pageNumber).then(res => {
        let contents = [];
        if (res.status === 200) {
          this.pageNumber++;
          contents = res.data.collection;
          this.totalPages = res.data.totalCount;
          contents.forEach(item => {
            //item.createTime = this.formatDate(item.createTime);
            item.titleUrl = this.imgPrePath + item.titleUrl;
          });
          this.consults = this.consults.concat(contents);
          this.loading = false;
        }
      });
    },
    changToCurrent(text) {
      let id = 0;
      if (text === "hot" && !this.active) {
        this.active = true;
        this.pageTitle = "简讯报道";
        id = requestId.listId.consult_hot;
        this.pageNumber = 1;
        this.consults = [];
        this.toGetArticleList(id, this.pageNumber);
      } else if (text === "related" && this.active) {
        this.active = false;
        this.pageTitle = "街道报道";
        id = requestId.listId.consult_related;
        this.pageNumber = 1;
        this.consults = [];
        this.toGetArticleList(id, this.pageNumber);
      }
    },
    viewDetail(id, url) {
      if(url&&url.length>0){
        window.open(url);
        // this.$store.commit("setIframeUrl", url);
        // this.$router.push("/out_view");
      }else{
        this.$store.commit("setTitle", this.pageTitle);
        this.$store.commit("setArticleRequestId", id);
        this.$router.push("/article");
      }
    }
  },
  destroyed() {
    this.end = false;
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.consult {
  height: calc(100% - 90px) !important;
}

.subheader {
  position: relative;
  left: 0;
  top: 0;
  background-color: #b2e3d4;
  width: 100vw;
  height: 40px;
  color: white;
}

.m-auto {
  text-align: center;
}

.title > div {
  height: 40px;
  line-height: 40px;
}

.subtitle{
  color: gray;
}

.active {
  font-weight: bold;
  border-bottom: 4px solid #ff6418;
  color: green;
  height: 40px;
}

.consult_banner {
  width: 100%;
}

.consult_content {
  width: 100%;
  height: calc( 100% - 40px );
  overflow: auto;
}

.content_box {
  padding: 15px 0;
  border-bottom: 1px solid lightgray;
}

.article_title{
  height: 86px;
}

.title_box{
  height: 66px;
	overflow: hidden;
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

.consult_content_list {
  margin: 0 !important;
  padding: 0;
}
</style>


