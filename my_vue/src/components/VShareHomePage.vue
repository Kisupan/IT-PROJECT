<template>
  <div class="home-page">
    <!-- <VShareHeader></VShareHeader> -->
    <HomePageChannel></HomePageChannel>
    <MyCarousel></MyCarousel>
    <RecommandVideos></RecommandVideos>
  </div>
</template>

<script>
import HomePageChannel from "./HomePageChannel.vue";
import MyCarousel from "./MyCarousel.vue";
// import VShareHeader from './VShareHeader.vue';
import RecommandVideos from "./RecommandVideos.vue";
export default {
  components: {
    HomePageChannel,
    MyCarousel,
    // VShareHeader,
    RecommandVideos,
  },
};
</script>

<style>
</style>