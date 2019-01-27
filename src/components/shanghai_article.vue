<template>
  <div class="main shanghai" ref="shanghai">
    <img class="shanghai_title" ref="banner" :src="getBannerUrl">
    <div class="m-auto artile_top">
      <h5 class="artile_title">{{ getSubTitle }}</h5>
      <div class="m-t-15 fz-12">{{ detail.views + '人阅读'}}</div>
    </div>
    <div class="article" :style="{height: height_calc}">
      <!-- <div class="m-auto classification" v-if="detail.imgSrc">
        <img width="100%" :src="detail.imgSrc">
      </div> -->
      <article class="row m-auto m-t-15 article_box" v-html="detail.content"></article>
    </div>
  </div>
</template>

<script>
import api from "../store/api.js";
import requestId from "../store/request_id.js";
export default {
  data() {
    return {
      height_calc: "",
      subTitle: this.$store.state.subTitle,
      banner: this.$store.state.shanghaiBanner,
      detail: {
        views: 0,
        content: ""
      }
    };
  },
  mounted() {
    let timer = setTimeout(() => {
      this.height_calc =
        this.$refs.shanghai.offsetHeight && this.$refs.banner.offsetHeight
          ? this.$refs.shanghai.offsetHeight -
            this.$refs.banner.offsetHeight +
            "px"
          : "auto";
    }, 100);

    const title = this.getSubTitle;
    const id =
      title === "垃圾去哪了"
        ? requestId.articleId.shanghai_where
        : title === "垃圾分类的价值"
        ? requestId.articleId.shanghai_value
        : requestId.articleId.shanghai_kind;
    this.getContent(id);
  },
  activated() {
    const title = this.getSubTitle;
    if (title !== this.subTitle) {
      this.subTitle = title;
      this.banner = this.$store.state.shanghaiBanner;
      const id =
        title === "垃圾去哪了"
          ? requestId.articleId.shanghai_where
          : title === "垃圾分类的价值"
          ? requestId.articleId.shanghai_value
          : requestId.articleId.shanghai_kind;
      this.getContent(id);
    }
  },
  methods: {
    getContent(id) {
      api.chaxun(id).then(res => {
        if (res && res.status === 200) {
          const data = res.data;
          this.detail = {
            views: data.columnName,
            content: data.columnContent
          };
        }
      });
    }
  },
  computed: {
    getSubTitle(){
      return this.$store.state.subTitle;
    },
    getBannerUrl(){
      return this.$store.state.shanghaiBanner;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.m-auto {
  text-align: center;
}

.artile_top {
  position: absolute;
  top: 30px;
  left: 5vw;
  width: 90vw;
  text-align: left;
  color: white;
}

.artile_title {
  font-weight: bolder;
}

.shanghai_title {
  width: 100%;
}

.shanghai_pic {
  width: 100%;
  border-radius: 6px;
}

.m-t-15 {
  margin-top: 15px !important;
}

.article {
  overflow: auto;
}

.classification {
  width: 80vw;
  padding-top: 30px !important;
}

.article_box {
  width: 90vw;
  font-size: 14px;
  text-align: justify;
  padding-top: 15px;
}
</style>


