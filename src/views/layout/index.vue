<template>
    <el-container>
        <el-aside>
            <Aside />
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <Main />
            </el-main>
            <el-footer>
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