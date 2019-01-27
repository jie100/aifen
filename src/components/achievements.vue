<template>
  <div class="main achievements">
    <div class="m-auto achieve_body">
      <h6 class="achieve_title">{{ achieve.title }}</h6>
      <div class="achieve_content fz-12" v-html="achieve.content"></div>
    </div>
  </div>
</template>

<script>
import api from "../store/api.js";
import requestId from "../store/request_id.js";

export default {
  data() {
    return {
      achieve: {
        title: "",
        content: "",
      }
    };
  },
  mounted(){
    const id = requestId.articleId.ghxc_achieve;
    api.chaxun(id).then(res => {
        if (res && res.status === 200) {
          const data = res.data;
          this.achieve = {
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
.achievements {
  overflow: auto;
}

.achieve_body {
  width: 90vw;
  padding:0 .5em;
}

.achieve_title{
  margin-top: 36px;
}


</style>


