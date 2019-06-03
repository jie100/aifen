<template>
<div id="page">
    <v-header title="街道工作概况"></v-header>
    <div class="main survey">
      <div class="m-auto survey_content">
        <h6 class="survey_title">{{ survey.title }}</h6>
        <!-- <div class="m-t-15 fz-12 content_box" v-html="survey.contents"></div>
        <div class="row community m-t-10">
          <div class="col-4 community_left">
            <div class="m-t-15">社区数量</div>
            <div class="m-t-10">{{ survey.community.community_num + "个" }}</div>
          </div>
          <div class="col-8">
            <div class="m-t-15">社区类型</div>
            <div class="m-t-10">{{ survey.community.community_name }}</div>
          </div>
        </div>
        <div class="row unit">
          <div class="col-4 unit_left">
            <div class="m-t-15">单位数量</div>
            <div class="m-t-10">{{ survey.unit.unit_num + "个" }}</div>
          </div>
          <div class="col-8">
            <div class="m-t-15">单位类型</div>
            <div class="m-t-10">{{ survey.unit.unit_name }}</div>
          </div>
        </div>
        <div class="total green fz-14 fw-bold">
          {{ '居民总户数' + survey.total + '万户' }}
        </div> -->
        <div class="row m-t-10 content_box" v-html="survey.content"></div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
import header from "@/components/header";
import api from "../store/api.js";
import requestId from "../store/request_id.js";
export default {
  components:{
    "v-header": header,
    "v-footer": footer
  },

  data() {
    return {
      survey: {}
    };
  },
  mounted(){
    const id = requestId.articleId.ghxc_survey;
    api.chaxun(id).then(res => {
        if (res && res.status === 200) {
          const data = res.data;
          this.survey = {
            title: data.columnName,
            content: data.columnContent
          };
        }
      });
  },
  methods: {

  }
};
</script>

<style scoped>
.survey {
  background-image: url("../assets/images/survey_bg.png");
  background-size: 100% auto;
  background-position: left top;
  background-repeat: no-repeat;
  overflow: auto;
}

.survey_content {
  width: 90vw;
  margin-top: 95px !important;
}

.survey_title{
  padding:0 10px;
}

.content_box{
  line-height: 20px;
  padding: 10px;
  text-align: left;
}

.community,.unit {
  border-radius: 10px;
  background-color: #ff8929;
  height: 80px;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.unit{
  margin-top: 5px;
}

.community_left,.unit_left {
  border-radius: 10px;
  background-color: #00a370;
}

.total{
  text-align: center;
  margin-top: 20px;
}
p{
  margin-bottom: 0
}
</style>


