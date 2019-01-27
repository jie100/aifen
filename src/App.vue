<template>
  <div id="app">
    <v-header v-if="controlHeader"></v-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <v-footer v-if="controlFooter"></v-footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
import header from "@/components/header";
import cookie from '@/cookie/index.js';
export default {
  name: "App",
  components: {
    "v-footer": footer,
    "v-header": header
  },
  data() {
    return {};
  },
  mounted() {
    //this.$router.push("/home");

    const state = this.$store.state;
    const commit = this.$store.commit;

    const token = cookie.getCookie("token");
    const name = cookie.getCookie("name");
    if (name && token) {
      commit("setToken", token);
      commit("setUserName", name);
    }
  },
  computed: {
    controlHeader() {
      return this.$store.state.showHeader;
    },
    controlFooter() {
      return this.$store.state.showFooter;
    }
  }
};
</script>

<style>
#app {
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
