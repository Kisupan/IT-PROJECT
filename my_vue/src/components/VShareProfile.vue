<template>
    <div class="profile-page">
        <!-- <ProfileHeader></ProfileHeader> -->
        <ProfileBody></ProfileBody>
        <VShareFooter></VShareFooter>
    </div>
</template>

<script>
import VShareFooter from './VShareFooter.vue';
// import ProfileHeader from './ProfileHeader.vue';
import ProfileBody from './ProfileBody.vue';

export default {
    name: 'VShareProfile',
    components: {
        VShareFooter,
        // ProfileHeader,
        ProfileBody
}
}
</script>

<style>

</style>