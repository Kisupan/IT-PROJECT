<template>
    <div class="home-page">
        <!-- <VShareHeader></VShareHeader> -->
        <HomePageChannel></HomePageChannel>
        <MyCarousel></MyCarousel>
        <RecommandVideos></RecommandVideos>
        <VShareFooter></VShareFooter>
    </div>
</template>

<script>
import HomePageChannel from './HomePageChannel.vue';
import MyCarousel from './MyCarousel.vue';
// import VShareHeader from './VShareHeader.vue';
import VShareFooter from './VShareFooter.vue';
import RecommandVideos from './RecommandVideos.vue';
export default {
    components: {
        HomePageChannel,
        MyCarousel,
        // VShareHeader,
        VShareFooter,
        RecommandVideos
    }
}
</script>

<style>

</style>