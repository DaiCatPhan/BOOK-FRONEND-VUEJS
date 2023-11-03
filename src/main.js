import { createApp } from "vue";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import router from "./router/route";

const app = createApp(App);

app.use(router);
app.use(Antd);

app.mount("#app");
