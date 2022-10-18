<template>
  <div id="app">
    <div v-if="admin()">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
    <div v-else>
      <VShareHeader v-if="isRouterAlive"></VShareHeader>
      <router-view v-if="isRouterAlive" style="position:relative;height:auto;margin:0 auto; min-height: 100vh;;padding:10px;height:100%"></router-view>
      <VShareFooter  v-if="isRouterAlive" style="position:absolute; width:100%"></VShareFooter>
    </div>
    <!-- <manage-account></manage-account> -->
    <!-- <VShareProfile></VShareProfile> -->
    <!-- <VShareHomePage></VShareHomePage> -->
    <!-- <UploadPage></UploadPage> -->
  </div>
</template>

<script>
// import ManageAccount from "./components/ManageAccount.vue";
// import VShareProfile from './components/VShareProfile.vue';
// import VShareHomePage from './components/VShareHomePage.vue'
// import UploadPage from './components/UploadPage.vue'
import VShareHeader from "./components/VShareHeader.vue";
import VShareFooter from "./components/VShareFooter.vue";
// import ManagementSystem from "./components/ManagementSystem.vue";

export default {
  name: "App",
  components: {
    // VShareProfile
    // VShareHomePage,
    // UploadPage
    VShareHeader,
    VShareFooter,
    // ManagementSystem,
    // ManageAccount,
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
      admin_log: false,
      admin_load: false,
    };
  },
  methods: {
    admin() {
      this.admin_log = this.admin_load;
      if (localStorage.getItem("Stay") === "True") {
        console.log("fuck");
        this.$router.push("/admin");
        this.admin_log = true;
        return this.admin_log;
      }
      if (this.admin_log == true) {
        this.$router.push("/admin");
      }
      return this.admin_log;
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    admin_system_load() {
      this.admin_load = true;
      this.admin();
    },
    admin_system_close() {
      this.admin_load = false;
      this.admin();
    },
  },
};
</script>

<style>


</style>
