<template>
  <div class="main union">
    <div class="m-auto union_body">
      <h6 class="union_title">{{ union.title }}</h6>
      <!-- <ul class="row union_list">
        <li class="col-4 list" v-for="list in union.unionList">
          <div class="list_content">
            <img width="100%" :src="list.imgSrc">
            <div class="union_name fw-bold fz-14">{{ list.union_name }}</div>
          </div>
        </li>
      </ul> -->
      <div class="union_list" v-html="union.content"></div>
    </div>
  </div>
</template>

<script>
import api from "../store/api.js";
import requestId from "../store/request_id.js";
export default {
  data() {
    return {
      union: {}
    };
  },
  mounted(){
    const id = requestId.articleId.ghxc_union;
    api.chaxun(id).then(res => {
        if (res && res.status === 200) {
          const data = res.data;
          this.union = {
            title: data.columnName,
            content: data.columnContent
          };
        }
      });
  },
  methods: {}
};
</script>

<style scoped>
.union{
  overflow: auto;
}

.union_body {
  width: 90vw;
}
.union_title {
  margin-top: 36px;
  text-indent: 0.5em;
}

.list {
  padding: 4px;
}

.list_content {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.union_name{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: #00a370;
  color: white;
  text-align: center;
  line-height: 2px;
  text-shadow: -1px 0 #00a370, 0 1px #00a370, 1px 0 #00a370, 0 -1px #00a370; 
}
</style>


