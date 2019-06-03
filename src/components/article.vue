<template>
  <div class="page">
    <v-header title="文章详情"></v-header>
    <div class="main consult" ref="consult">
      <div class="contents m-auto">
        <h5 class="title text_align_left">{{ article.title_name }}</h5>
        <div class="row m-auto m-t-10">
          <div class="col-8 text_align_left padding_0">
            <span class="green fz-12">{{ article.author }}</span>
            <span class="green m_l_10 fz-12" v-if="article.create_time">{{ article.create_time }}</span>
          </div>
          <div class="col-4 padding_0 text_align_right">
            <span class="fz-12">{{ article.form_id + "人阅读" }}</span>
          </div>
          <div class="article_content m-t-15 fz-14" v-html="article.content"></div>
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
//import Time from "../directives/time.js";
export default {
  // directives: {
  //   Time
  // },
  components:{
    "v-header": header,
    "v-footer": footer
  },
  data() {
    return {
      firstId: "",
      article: {}
    };
  },
  mounted() {
    this.firstId = this.$store.state.articleRequestId;
    this.$store.commit('setArticleRequestId', this.firstId);
    this.article = {};
    api.getArticlrContent(this.firstId).then(res => {
      if (res.status === 200) {
        const content = res.data;
        //content.create_time = this.formatDate(content.create_time);
        this.article = content;
      }
    });
  },
  activated() {
    const id = this.$store.state.articleRequestId;
    if (id !== this.firstId) {
      this.article = {};
      api.getArticlrContent(id).then(res => {
        if (res.status === 200) {
          const content = res.data;
          //content.create_time = this.formatDate(content.create_time);
          this.article = content;
        }
      });
    }
  },
  methods: {
    formatDate(date) {
      let lastdate = new Date(date);
      return lastdate.getTime();
    }
  },
  destroyed() {
    this.firstId = this.$store.state.articleRequestId;
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.consult {
  height: calc(100% - 50px) !important;
}

.header {
  position: relative;
  left: 0;
  top: 0;
  background-color: #00a370;
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

.active {
  font-weight: bold;
  border-bottom: 4px solid #ff6418;
}

.contents {
  padding: 20px 0;
  width: 90vw;
  height: calc(100% - 40px);
  overflow: auto;
}

.green {
  color: green;
}

.m_l_10 {
  margin-left: 10px;
}

.text_align_left {
  text-align: left;
}

.text_align_right {
  text-align: right;
}

.padding_0 {
  padding: 0;
}

.banner_box {
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
}
</style>


