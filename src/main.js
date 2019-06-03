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
  render: h => h(App),
}).$mount("#app");
