<script setup>
import { storeToRefs } from 'pinia';
import Cards from './Cards.vue';
import LoginMessage from './LoginMessage.vue'
import Container from './Container.vue';
import { useUserStore } from '@/stores/users';

const userStore = useUserStore();
const { user, loadingUser } = storeToRefs(userStore);


</script>

<template>
    <Container>
        <div v-if="!loadingUser">
            <Cards v-if="user"></Cards>
            <LoginMessage v-else></LoginMessage>
        </div>
        <div v-else class="spinner">
            <a-spin></a-spin>
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

.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
</style>