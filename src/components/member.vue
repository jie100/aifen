<template>
  <div class="main member">
    <nav class="nav">
      <div class="row nav_box m-auto">
        <div class="col-4">
          <div
            @click="getList('society')"
            class="nav_header society"
            :class="actives.active01?'active':''"
          >社会风采</div>
        </div>
        <div class="col-4">
          <div
            @click="getList('company')"
            class="nav_header company"
            :class="actives.active02?'active':''"
          >单位风采</div>
        </div>
        <div class="col-4">
          <div
            @click="getList('pioneer')"
            class="nav_header pioneer"
            :class="actives.active03?'active':''"
          >先锋风采</div>
        </div>
      </div>
    </nav>
    <div class="member_content" ref="list">
      <ul class="member_content_list" ref="scroll_box">
        <li class="content_box" v-for="member in getMembers" :key="member.contentId">
          <div class="row" @click="viewDetail(member.contentId)">
            <div class="col-8">
              <div class="fz-14">{{ member.titleName }}</div>
              <div class="else_info">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <span v-time="member.createTime"></span>
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
      <div class="loading" v-if="loading">
        <i class="fa fa-spinner fa-lg transform" aria-hidden="true"></i>
        <span>Loading</span>
      </div>
      <div class="loading fz-12" v-if="end">
        已经到底啦！
      </div>
    </div>
  </div>
</template>

<script>
import api from "../store/api.js";
import Time from "../directives/time.js";
import requestId from "../store/request_id.js";
export default {
  directives: {
    Time
  },
  data() {
    return {
      members: [],
      pageNumber: 1,
      pageTitle: "",
      actives: {
        active01: true,
        active02: false,
        active03: false
      },
      imgPrePath: "http://39.98.78.200:8080/ofcms-admin",
      totalPages: 0,
      loading: false,
      end: false
    };
  },
  mounted() {
    const id = requestId.listId.member_society;
    this.toGetArticleList(id, this.pageNumber);
  },
  activated() {
    const list = this.$refs.list;
    const listFixedHeight = list.offsetHeight;
    const id =
      this.pageTitle === "社会风采"
        ? requestId.listId.member_society
        : this.pageTitle === "单位风采"
        ? requestId.listId.member_company
        : requestId.listId.member_pioneer;
    list.addEventListener("scroll", () => {
      let scrollHeight = this.$refs.scroll_box.offsetHeight;
      let dyHeight = scrollHeight - listFixedHeight - 10;
      if (list.scrollTop >= dyHeight && this.pageNumber <= this.totalPages && !this.loading) {
        this.toGetArticleList(id, this.pageNumber);
      }else if(this.pageNumber > this.totalPages){
        this.end = true;
      }
    });
  },
  computed: {
    getMembers() {
      return this.members;
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
            item.createTime = this.formatDate(item.createTime);
            item.titleUrl = this.imgPrePath + item.titleUrl;
          });
          this.members = this.members.concat(contents);
          this.loading = false;
        }
      });
    },
    getList(text) {
      let id = 0;
      this.end = false;
      if (text === "society" && !this.actives.active01) {
        this.actives.active01 = true;
        this.actives.active02 = false;
        this.actives.active03 = false;
        this.pageTitle = "社会风采";
        id = requestId.listId.member_society;
        this.pageNumber = 1;
        this.members = [];
        this.toGetArticleList(id, this.pageNumber);
      } else if (text === "company" && !this.actives.active02) {
        this.actives.active01 = false;
        this.actives.active02 = true;
        this.actives.active03 = false;
        this.pageTitle = "单位风采";
        id = requestId.listId.member_company;
        this.pageNumber = 1;
        this.members = [];
        this.toGetArticleList(id, this.pageNumber);
      } else if (text === "pioneer" && !this.actives.active03) {
        this.actives.active01 = false;
        this.actives.active02 = false;
        this.actives.active03 = true;
        this.pageTitle = "先锋风采";
        id = requestId.listId.member_pioneer;
        this.pageNumber = 1;
        this.members = [];
        this.toGetArticleList(id, this.pageNumber);
      }
    },
    viewDetail(id) {
      this.$store.commit("setTitle", this.pageTitle);
      this.$store.commit("setArticleRequestId", id);
      this.$router.push("/article");
    }
  },
  destroyed(){
    this.end = false;
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.nav {
  width: 100%;
  border-bottom: 1px solid lightgray;
}

.nav_box {
  width: 90%;
}

.nav_header {
  text-align: center;
  height: 20px;
  line-height: 20px;
  margin: 15px 0;
  background-color: #00a370;
  color: white;
  font-size: 12px;
  border-radius: 10px;
}

.nav_header.active {
  background-color: #ff6418;
}

.member_content {
  width: 100%;
  height: calc(100% - 51px);
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

.member_content_list{
  margin: 0;
}
</style>


