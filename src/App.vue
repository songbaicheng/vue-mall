<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-container">
    <!-- 路由出口，路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>