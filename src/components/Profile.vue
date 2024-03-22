<script setup>
import Container from './Container.vue';
import Userbar from './Userbar.vue';
import ImageGallary from './ImageGallary.vue';

</script>

<template>
    <Container>
        <div class="profile-container">
            <Userbar username="Ivan Koon" :userInfo="{
                posts: 4,
                followers: 100,
                following: 342
            }"></Userbar>
            <ImageGallary :posts="[
                {
                    id: 1,
                    url: 'https://www.kauffmannsguitarstore.com/wp-content/uploads/2023/10/Gibson-SG-1969-24.jpg'
                },
                {
                    id: 1,
                    url: 'https://www.kauffmannsguitarstore.com/wp-content/uploads/2023/10/Gibson-SG-1969-24.jpg'
                },
            ]"></ImageGallary>
        </div>
    </Container>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;

    padding: 20px 0;
}
</style>