<template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" status-icon>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                登录
            </el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormInstance, FormRules, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

interface RuleForm {
    username: string
    password: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: '',
    password: ''
})
const router = useRouter();

// 表单校验规则
const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, message: '请输入用户名！', trigger: 'red' }
    ],
    password: [
        { required: true, message: '请输入密码！', trigger: 'red' }
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            // 提示信息
            ElMessage({
                message: '登录成功',
                type: 'success',
            })
            // 跳转主页
            router.push({
                name: 'home'
            })
        } else {
            ElMessage.error('登录失败')
        }
    })
}
</script>
  