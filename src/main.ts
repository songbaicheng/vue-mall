import { createApp } from "vue";
import App from "~/App.vue";

import ElementPlus from 'element-plus'
import router from '~/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "~/styles/index.scss"; // 引入自定义 scss
import zhCn from 'element-plus/es/locale/lang/zh-cn'; 
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(router) // vue-router
app.use(ElementPlus, { // Element-plues
  locale: zhCn // 国际化-中文
});
app.use(createPinia()) // pinia
app.mount("#app");

// 全局注册 Element Plus 常用 icon 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
