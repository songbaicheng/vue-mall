<script setup lang="ts">
// 404 图片地址
import img_404 from '~/assets/images/gif_404.gif';

/**
 * 返回上一页
 */
const goBack = () => {
    this.$router.push('/home');
};
</script>

<template>
    <el-result title="OOPS! 很抱歉，页面它不小心迷路了！">
        <template #sub-title>
            <span>请检查您输入的网址是否正确，可选择返回<router-link to="/home">主页</router-link>或者向我们发送错误报告</span>
        </template>
        <template #icon>
            <el-image :src="img_404" />
        </template>
        <template #extra>
            <el-button-group>
                <el-button type="primary" @click="goBack">返回上一页</el-button>
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