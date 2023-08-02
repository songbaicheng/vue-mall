<script setup>
import Aside from './HomeAside.vue'
import Header from './HomeHeader.vue'
import Main from './HomeMain.vue'
import Footer from './HomeFooter.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
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
    </div>
</template>
  