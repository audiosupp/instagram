<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import Container from './Container.vue';
import AuthModal from './AuthModal.vue';
import { useUserStore } from '@/stores/users'
import { storeToRefs } from 'pinia';

const searchUserName = ref("");
const isAuth = ref(false);
const userStore = useUserStore();

const { user, loadingUser } = storeToRefs(userStore);
const router = useRouter();

const onSearch = () => {
    if (searchUserName.value) {
        router.push(`/profile/${searchUserName.value}`)
        searchUserName.value = ""
    }
}

const handleLogout = async () => {
    await userStore.handleLogout();
}

const goToUsersProfile = () => {
    router.push(`/profile/${user.value.username}`);
}

</script>

<template>
    <a-layout class="layout">
        <a-layout-header>
            <Container>
                <div class="nav-container">
                    <div class="right-content">
                        <RouterLink to="/">Instagram</RouterLink>
                        <a-input-search v-model:value="searchUserName" placeholder="username..." style="width: 200px"
                            @search="onSearch" />
                    </div>
                    <div v-if="!loadingUser" class="content">
                        <div class="left-content" v-if="!user">
                            <AuthModal :isLogin="false"></AuthModal>
                            <AuthModal :isLogin="true"></AuthModal>
                        </div>
                        <div class="left-content" v-else>
                            <a-button type="primary" @click="goToUsersProfile">Profile</a-button>
                            <a-button type="primary" @click="handleLogout">Logout</a-button>
                        </div>
                    </div>
                </div>
            </Container>
        </a-layout-header>
    </a-layout>
</template>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
}

.content {
    display: flex;
    align-items: center;
}

.right-content {
    display: flex;
    align-items: center;
}

.right-content a {
    margin-right: 10px;
}

.left-content {
    display: flex;
    align-items: center;
}

.left-content button {
    margin-left: 10px;
}
</style>