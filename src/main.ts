import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import {ElMessage} from 'element-plus'

const app = createApp(App)


app.use(router).use(ElementPlus).mount('#app')

app.provide('$message', ElMessage)
