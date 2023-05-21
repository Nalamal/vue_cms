import './assets/css/index.less'
import 'normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 针对ElMessage和ElLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
