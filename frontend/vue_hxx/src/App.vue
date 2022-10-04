<template>
  <div id="app">
    <VShareHeader></VShareHeader>
    <router-view></router-view>
    <!-- <VShareProfile></VShareProfile> -->
    <!-- <VShareHomePage></VShareHomePage> -->
    <!-- <UploadPage></UploadPage> -->
  </div>
</template>

<script>
// import VShareProfile from './components/VShareProfile.vue';
// import VShareHomePage from './components/VShareHomePage.vue'
// import UploadPage from './components/UploadPage.vue'
import VShareHeader from './components/VShareHeader.vue';




export default {
  name: 'App',
  components: {
    // VShareProfile
    // VShareHomePage,
    // UploadPage
    VShareHeader
}
}
</script>

<style>
</style>
