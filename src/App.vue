<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="ep">
    <div class="flex main-container">
      <!-- 路由出口，路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: 100%;
}
</style>