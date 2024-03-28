<script setup>
import { defineProps } from 'vue';

const propsPost = defineProps(['post']);
const { VITE_BASE_PHOTO_URL } = import.meta.env;
</script>

<template>
    <a-card hoverable style="width: 240px" class="card">
        <template #cover>
            <img :alt="post.caption" :src="VITE_BASE_PHOTO_URL + post.url" />
        </template>
        <a-card-meta :title="post.username">
            <template #description>{{ post.caption }}</template>
        </a-card-meta>
    </a-card>
</template>

<style scoped>
.card {
    margin-bottom: 20px;
}
</style>