<template>
    <el-container class="sidebar-container">
        <el-aside class="app-sidebar">
            <Aside />
        </el-aside>
        <el-container class="main-container">
            <el-header class="app-header">
                <Header />
            </el-header>
            <el-main class="app-main">
                <Main />
            </el-main>
            <el-footer class="app-footer">
                    <Footer />
            </el-footer>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Aside from '~/components/layout/BaseAside.vue'
import Header from '~/components/layout/BaseHeader.vue'
import Main from '~/components/layout/BaseMain.vue'
import Footer from '~/components/layout/BaseFooter.vue'
</script>