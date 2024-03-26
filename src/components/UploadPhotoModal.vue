<script setup>
import { ref } from 'vue';
import { supabase } from '@/supabase';

const open = ref(false);
const caption = ref("");
const file = ref(null);


const showModal = () => {
    open.value = true;
};
const handleOk = async (e) => {
    //open.value = false;
    const fileName = Math.floor(Math.random() * 10000000000000);
    if (file.value) {
        const response = await supabase.storage.from("images").upload('public/' + fileName, file.value);
        console.log({ response });
    }
};
const handleUploadChange = (e) => {
    if (e.target.files[0]) {
        file.value = e.target.files[0];
    }
}
</script>

<template>
    <div>
        <a-button @click="showModal">Upload Photo</a-button>
        <a-modal v-model:open="open" title="UploadPhoto" @ok="handleOk">
            <input type="file" accept=".jpeg,.png" @change="handleUploadChange">
            <a-input v-model:value="caption" placeholder="Caption..." :max-length="50"></a-input>
        </a-modal>
    </div>
</template>

<style scoped>
input {
    margin-top: 10px
}
</style>