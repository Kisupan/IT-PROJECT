<template>
    <div class="upload-page">
        <!-- <ProfileHeader></ProfileHeader> -->
        <UploadVideo></UploadVideo>
    </div>
</template>

<script>
import UploadVideo from './UploadVideo.vue';
// import ProfileHeader from './ProfileHeader.vue';
export default {
    name: 'UploadPage',
    components: {
    UploadVideo,
    // ProfileHeader,
}
}
</script>

<style>

</style>