<script setup>
import { ref } from 'vue';
import { supabase } from '@/supabase';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';

const loading = ref(false);
const errorMessage = ref("");
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const open = ref(false);
const caption = ref("");
const file = ref(null);


const showModal = () => {
    open.value = true;
};
const handleOk = async (e) => {
    loading.value = true;
    const fileName = Math.floor(Math.random() * 10000000000000);

    if (file.value) {
        const { data, error } = await supabase.storage.from("images").upload('public/' + fileName, file.value);

        if (error) {
            loading.value = false;
            return errorMessage.value = "Unable to upload image";
        }

        if (data) {
            await supabase.from("posts").insert({
                url: data.path,
                caption: caption.value,
                owner_id: user.value.id
            })
        }
    }

    loading.value = false;
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
            <div v-if="!loading">
                <input type="file" accept=".jpeg,.png" @change="handleUploadChange">
                <a-input v-model:value="caption" placeholder="Caption..." :max-length="50"></a-input>
                <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
            </div>
            <div v-else class="spinner">
                <a-spin></a-spin>
            </div>
        </a-modal>
    </div>
</template>

<style scoped>
input {
    margin-top: 10px
}

.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>