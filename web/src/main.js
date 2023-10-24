import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// FlvJS
import flvjs from "flv.js";

createApp(App).use(router).use(ElementPlus).use(flvjs).mount('#app')
