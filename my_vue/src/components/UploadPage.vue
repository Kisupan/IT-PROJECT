<template>
    <div class="upload-page">
        <!-- <ProfileHeader></ProfileHeader> -->
        <UploadVideo></UploadVideo>
        <VShareFooter></VShareFooter>
    </div>
</template>

<script>
import UploadVideo from './UploadVideo.vue';
// import ProfileHeader from './ProfileHeader.vue';
import VShareFooter from './VShareFooter.vue';
export default {
    name: 'UploadPage',
    components: {
    UploadVideo,
    // ProfileHeader,
    VShareFooter
}
}
</script>

<style>

</style>