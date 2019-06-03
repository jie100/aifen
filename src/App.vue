<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import cookie from '@/cookie/index.js';
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    const state = this.$store.state;
    const commit = this.$store.commit;

    const token = cookie.getCookie("token");
    const name = cookie.getCookie("name");
    if (token && name) {
      commit("setToken", token);
      commit("setUserName", name);
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
