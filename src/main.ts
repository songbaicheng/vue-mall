import { createApp } from "vue";
import App from "~/App.vue"; 

import ElementPlus from 'element-plus' // Element-plues
import router from '~/router' // vue-router
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // icon 图标
import "~/styles/index.scss"; // 引入自定义 scss
import zhCn from 'element-plus/es/locale/lang/zh-cn'; // 国际化-中文
import { createPinia } from 'pinia' // pinia

const app = createApp(App);
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
});
app.use(createPinia())
app.mount("#app");

// 全局注册 Element Plus 常用 icon 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
