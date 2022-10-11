<template>
  <div>
    <router-view v-if="isRouterAlive"></router-view>
    <div v-show="show">
      <router-link to="/Administrator"
        ><button @click="clickit" class="btn btn-outline-primary">
          To Administrator
        </button></router-link
      >
      <router-link to="/VideoPlay?path=/resources/sb.mp4"
        ><button @click="clickit" class="btn btn-outline-primary">
          To VideoPlay
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
      show: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    clickit() {
      this.show = false;
    },
  },
};
</script>
<style scoped>
.active {
  display: none;
}
</style>
