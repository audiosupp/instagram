<script setup>
import { defineProps } from 'vue';
import UploadPhotoModal from './UploadPhotoModal.vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';

const route = useRoute();
const { username: profileUsername } = route.params;
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const props = defineProps(['user', 'username', 'userInfo', "addNewPost"]);

</script>

<template>
    <div class="userbar-container" v-if="props.user">
        <div class="top-content">
            <a-typography-title :level="2">{{ props.user.username }}</a-typography-title>
            <UploadPhotoModal v-if="user && profileUsername === user.username" :addNewPost="addNewPost" />
        </div>
        <div class="bottom-content">
            <a-typography-title :level="5">{{ props.userInfo.posts }}</a-typography-title>
            <a-typography-title :level="5">{{ props.userInfo.followers }}</a-typography-title>
            <a-typography-title :level="5">{{ props.userInfo.following }}</a-typography-title>
        </div>
    </div>
    <div class="userbar-container" v-else>
        <div class="top-content">
            <a-typography-title :level="2">User Not Found</a-typography-title>
        </div>
    </div>
</template>

<style scoped>
.top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.userbar-container {
    padding-bottom: 75px;
}

.bottom-content {
    display: flex;
    align-items: center;
}

.bottom-content h5 {
    margin: 0;
    padding: 0;
    margin-right: 30px;
}
</style>