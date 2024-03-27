<script setup>
import Container from './Container.vue';
import Userbar from './Userbar.vue';
import ImageGallary from './ImageGallary.vue';
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';

const route = useRoute()
const { username } = route.params;
const user = ref(null);
const posts = ref([]);
const loading = ref(false);

const addNewPost = (post) => {
    posts.value.unshift(post);
}


const fetchData = async () => {
    loading.value = true;
    const { data: userData } = await supabase.from("users").select().eq('username', username).single();

    if (!userData) {
        loading.value = false;
        return user.value = null;
    }

    if (userData) {
        user.value = userData;
    }

    const { data: postsData } = await supabase.from("posts").select().eq("owner_id", user.value.id);

    posts.value = postsData;
    loading.value = false;
}

onMounted(() => {
    fetchData()
})

</script>

<template>
    <Container>
        <div class="profile-container" v-if="!loading">
            <Userbar :key="$route.params.username" :user="user" :userInfo="{
            posts: 4,
            followers: 100,
            following: 342

        }" :addNewPost=addNewPost></Userbar>
            <ImageGallary :posts="posts"></ImageGallary>
        </div>
        <div class="spinner" v-else>
            <a-spin></a-spin>
        </div>
    </Container>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;

    padding: 20px 0;
}

.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
}
</style>