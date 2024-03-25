<script setup>
import { ref, defineProps, reactive } from 'vue';
import { useUserStore } from '@/stores/users.js';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { errorMessage } = storeToRefs(userStore);


const open = ref(false);
const props = defineProps(['isLogin']);

const userCredentials = reactive({
    email: '',
    password: '',
    username: ''
});
const showModal = () => {
    open.value = true;
};
const handleOk = (e) => {
    userStore.handleSignup(userCredentials)
};

const title = props.isLogin ? 'Login' : 'SignUp';
</script>

<template>
    <div>
        <a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
        <a-modal v-model:open="open" :title="title" @ok="handleOk">
            <a-input class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
            <a-input class="input" v-model:value="userCredentials.password" placeholder="Password" type="password" />
            <a-input class="input" v-model:value="userCredentials.email" placeholder="Email" />
            <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
        </a-modal>
    </div>
</template>

<style scoped>
.btn {
    margin-left: 10px;
}

.input {
    margin-top: 5px;
}
</style>