<script setup>
import { defineProps } from 'vue';

const props = defineProps(['posts'])
const storageFullPath = 'https://dsrweebolpprswxqnznb.supabase.co/storage/v1/object/public/images/';

</script>

<template>
    <div class="image-gallary-container">
        <img v-for="post in props.posts" :key="post.id" :src="storageFullPath + post.url" alt="">
    </div>
</template>

<style scoped>
.image-gallary-container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

img {
    margin: 5px;
    width: 200px;
}
</style>