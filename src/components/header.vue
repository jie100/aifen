<template>
  <div class="row header">
    <div class="back_icon col-1 m-auto">
      <i @click="goBack" class="fa fa-chevron-left" aria-label="Add Row" title="Add Row"></i>
    </div>
    <h6 class="title col-11 m-auto">{{ getTitle }}</h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goBack: function() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  computed: {
    getTitle (){
      return this.$store.state.title;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
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
</style>


