<template>
    登录界面
    <button @click="login">跳转主页</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router' 

const router = useRouter();
const login = () => {
    router.push({
        name: 'home'
    })
}
</script>