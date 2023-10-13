import { createApp } from "vue";
import "./style.scss";
import "./app.scss";
import App from "./App.vue";
import router from "./router";
import config from "./config";

const app = createApp(App);
app.config.globalProperties.config = config;

app.use(router).mount("#app");
