// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.css";
import "./assets/css/index.css";

Vue.config.productionTip = false;

const app = new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  const name = to.name;
  switch (name) {
    case "app": {
      store.commit("showHeader", false);
      break;
    }
    case "home": {
      store.commit("showHeader", false);
      break;
    }
    case "login": {
      store.commit("showHeader", false);
      break;
    }
    case "register": {
      store.commit("showHeader", false);
      store.commit("setFooter", false);
      break;
    }
    case "consult": {
      store.commit("showHeader", false);
      break;
    }
    case "article": {
      store.commit("showHeader", true);
      store.commit("setTitle", store.state.title);
      break;
    }
    case "sha": {
      store.commit("showHeader", true);
      store.commit("setTitle", "上海垃圾分类知识");
      break;
    }
    case "shanghai_article": {
      store.commit("showHeader", true);
      store.commit("setTitle", "上海垃圾分类知识");
      break;
    }
    case "ghxc": {
      store.commit("showHeader", true);
      store.commit("setTitle", "共和新垃圾分类");
      break;
    }
    case "member": {
      store.commit("showHeader", true);
      store.commit("setTitle", "联盟成员风采");
      break;
    }
    case "message": {
      store.commit("showHeader", true);
      store.commit("setTitle", "互动消息");
      break;
    }
    case "personal": {
      store.commit("showHeader", true);
      store.commit("setTitle", "个人中心");
      break;
    }
    case "survey": {
      store.commit("showHeader", true);
      store.commit("setTitle", "共和新垃圾分类");
      break;
    }
    case "union": {
      store.commit("showHeader", true);
      store.commit("setTitle", "共和新垃圾分类");
      break;
    }
    case "achievements": {
      store.commit("showHeader", true);
      store.commit("setTitle", "共和新垃圾分类");
      break;
    }
    case "list": {
      store.commit("showHeader", true);
      store.commit("setTitle", "搜索结果");
      break;
    }
  }
  next();
});

