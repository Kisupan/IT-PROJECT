<template>
  <div id="app">
    <div v-if="isadmin">
      <ManagementSystem v-if="isRouterAlive"></ManagementSystem>
    </div>
    <div v-else>
      <VShareHeader v-if="isRouterAlive"></VShareHeader>
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
import VShareHeader from "./components/VShareHeader.vue";
import ManagementSystem from "./components/ManagementSystem.vue";

export default {
  name: "App",
  components: {
    VShareHeader,
    ManagementSystem,
  },
  provide() {
    return {
      reload: this.reload,
      admin_system_load: this.admin_system_load,
      admin_system_close: this.admin_system_close,
    };
  },
  data() {
    return {
      isRouterAlive: true,
      isadmin: false,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    admin_system_load() {
      this.isadmin = true;
    },
    admin_system_close() {
      this.isadmin = false;
    },
  },
  mounted() {
    if (localStorage.getItem("Stay") === "True") {
      this.isadmin = true;
    }
  },
};
</script>

<style>
</style>
