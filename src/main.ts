import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import router from './router'

import "~/styles/index.scss"; // 引入自定义 scss
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
app.use(router)
app.use(ElementPlus);
app.mount("#app");
