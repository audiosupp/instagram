<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Container from './Container.vue';
import AuthModal from './AuthModal.vue';

const searchUserName = ref("");
const isAuth = ref(false);

const onSearch = () => {

}

// <a-button type="primary">Login</a-button>
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
                    <div class="left-content" v-if="!isAuth">
                        <AuthModal :isLogin="false"></AuthModal>
                        <AuthModal :isLogin="true"></AuthModal>
                    </div>
                    <div class="left-content" v-else>
                        <a-button type="primary">Profile</a-button>
                        <a-button type="primary">Logout</a-button>
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