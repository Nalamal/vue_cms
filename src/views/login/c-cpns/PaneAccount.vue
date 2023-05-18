<template>
  <div class="pane-account">
    <el-form v-model="account" :rules="accountRules" label-width="60" size="large">
      <el-form-item label="帐号" props="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" props="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus/lib/components/index.js'

// 1. 定义account数据
const account = reactive({
  username: '',
  password: ''
})

// 2. 定义校验规则
const accountRules: FormRules = {
  username: [
    { required: true, message: '必须输入账号信息', trigger: 'blur' },
    { min: 6, max: 20, message: '长度必须是6~20位数字或字母组成', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    { min: 3, message: '必须是3位以上数字或字母组成', trigger: 'blur' }
  ]
}
</script>

<style scoped></style>
