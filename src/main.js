import { createApp } from "vue";
import "./style.scss";
import "./app.scss";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
