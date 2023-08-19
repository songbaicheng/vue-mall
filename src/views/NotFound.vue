<template>
    <el-result title="OOPS! 很抱歉，页面它不小心迷路了！">
        <template #icon>
            <el-image src="src/assets/images/gif_404.gif" />
        </template>
        <template #extra>
            <el-button-group>
                <el-button type="primary" @click="goHomepage">返回首页</el-button>
                <el-button type="success" @click="goPreviousPage">返回上一页</el-button>
                <el-popover placement="bottom" title="songbaicheng16@163.com" :width="500" trigger="click"
                    content="请将遇到问题的详细描述发送给我，最好附带详情图片。">
                    <template #reference>
                        <el-button color="#626aef">邮件反馈</el-button>
                    </template>
                </el-popover>
            </el-button-group>
        </template>
    </el-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

/**
 * 返回上一页
 */
const goPreviousPage = () => {
    router.go(-1)
};

/**
 * 返回首页
 */
const goHomepage = () => {
    router.push({
        name: 'home'
    })
}
</script>
