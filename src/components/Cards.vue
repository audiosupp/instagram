<script setup>
import { supabase } from '@/supabase';
import Card from './Card.vue';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const data = [
    {
        id: 1,
        username: "krabs",
        url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbIQYCfhNeXlfZsDYRfKgA9GF3pop6PxtqVBEnOpXzM2Usbwr5",
        caption: ""
    },
    {
        id: 2,
        username: "furrya",
        url: "https://media1.s-nbcnews.com/i/streams/2014/December/141204/1D274907365869-tdy-141204-lea-seydoux-tease.jpg",
        caption: "leya"
    },
    {
        id: 3,
        username: "homer",
        url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/fe7874f8-98f8-44b6-bfff-93868a079942/width=450/00117-361038732.jpeg",
        caption: "ava ai"
    }
]

const fetchData = async () => {
    const response = await supabase.from("followers_following").select("following_id").eq("follower_id", user.value.id);
    console.log(response);
}

onMounted(() => {
    fetchData();
})

</script>


<template>
    <div class="timeline-container">
        <Card v-for="post in data" :key="post.id" :post="post"></Card>
    </div>
</template>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>