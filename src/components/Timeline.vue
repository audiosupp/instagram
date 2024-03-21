<script setup>
import Card from './Card.vue';
import Container from './Container.vue';

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

</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card v-for="post in data" :key="post.id" :post="post"></Card>
        </div>
    </Container>
</template>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>