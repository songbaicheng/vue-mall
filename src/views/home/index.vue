<script setup>
import Aside from '~/components/layouts/BaseAside.vue'
import Header from '~/components/layouts/BaseHeader.vue'
import Main from '~/components/layouts/BaseMain.vue'
import Footer from '~/components/layouts/BaseFooter.vue'
</script>

<template>
    <div>
        <el-container style="height: 100%;">
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
    </div>
</template>