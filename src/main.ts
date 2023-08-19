import { createApp } from "vue";
import App from "~/App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '~/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // icon 图标
import "~/styles/index.scss"; // 引入自定义 scss

const app = createApp(App);
app.use(router)
app.use(ElementPlus);
app.mount("#app");

// 全局注册 Element Plus 常用 icon 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
