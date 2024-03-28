<script setup>
import { defineProps } from 'vue';

const propsPost = defineProps(['post']);
const storageFullPath = 'https://dsrweebolpprswxqnznb.supabase.co/storage/v1/object/public/images/';
</script>

<template>
    <a-card hoverable style="width: 240px" class="card">
        <template #cover>
            <img :alt="post.caption" :src="storageFullPath + post.url" />
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