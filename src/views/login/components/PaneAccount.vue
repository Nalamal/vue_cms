<template>
  <div class="pane-account">
    <el-form :model="account" :rules="accountRules" label-width="60px" size="large" ref="formRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" state-icon>
        <el-input v-model="account.password" show-password state-icon />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// @ts-ignore
import { ElMessage } from 'element-plus'
// @ts-ignore
import type { FormInstance, FormRules } from 'element-plus'
import useLoginStore from '@/store/login'
import type { IAccount } from '@/types'

// 1. 定义account数据

const account = reactive<IAccount>({
  name: '',
  password: ''
})

// 2. 定义校验规则
const accountRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号信息', trigger: 'blur' },
    { min: 6, max: 20, message: '密码由6~20位数字或字母组成', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码信息', trigger: 'blur' },
    { min: 3, message: '密码由3位以上数字或字母组成', trigger: 'blur' }
  ]
})

// 3. 执行账号的登录逻辑
const formRef = ref<FormInstance>()
const loginStore = useLoginStore()
const loginAction = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      // 1. 获取用户输入的帐号和密码
      const name = account.name
      const password = account.password

      // 2. 向服务器发送网络请求(携带帐号和密码)
      loginStore.loginAccountAction({ name, password })
    } else {
      ElMessage.error('请您登录正确后的格式后在进行操作')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped></style>
