<script setup>
import Container from './Container.vue';
import Userbar from './Userbar.vue';
import ImageGallary from './ImageGallary.vue';
import { ref } from 'vue';

const posts = ref([]);
const addNewPost = (post) => {
    posts.value.unshift(post);
}

</script>

<template>
    <Container>
        <div class="profile-container">
            <Userbar :key="$route.params.username" username="Ivan Koon" :userInfo="{
                posts: 4,
                followers: 100,
                following: 342

            }" :addNewPost=addNewPost></Userbar>
            <ImageGallary :posts="posts"></ImageGallary>
        </div>
    </Container>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;

    padding: 20px 0;
}
</style>