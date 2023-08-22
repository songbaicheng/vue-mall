<template>
    <div class="login-backgroud">
        <div class="login-wrapper">
            <div class="login-container">
                <LoginForm></LoginForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="login">
import { ref, onMounted } from 'vue';
import LoginForm from '~/components/login/LoginForm.vue';

</script>

<style scoped lang="scss">
.login-backgroud {
    height: 100vh;
}

.login-wrapper {
    padding-top: 8%;
    height: 100vh;
    width: 80vh;
    margin: 0 auto;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>