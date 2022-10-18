<template>
  <div id="app">
    <div v-if="isadmin">
      <ManagementSystem v-if="isRouterAlive"></ManagementSystem>
    </div>
    <div v-else>
      <VShareHeader v-if="isRouterAlive"></VShareHeader>
      <router-view v-if="isRouterAlive" style="position:relative;height:auto;margin:0 auto; min-height: 100vh;;padding:10px;height:100%"></router-view>
      <VShareFooter  v-if="isRouterAlive" style="position:absolute; width:100%"></VShareFooter>
    </div>
  </div>
</template>

<script>
import VShareHeader from "./components/VShareHeader.vue";
import ManagementSystem from "./components/ManagementSystem.vue";
import VShareFooter from "./components/VShareFooter.vue";
export default {
  name: "App",
  components: {
    VShareHeader,
    ManagementSystem,
    VShareFooter,
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
