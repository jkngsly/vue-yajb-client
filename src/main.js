import { createApp } from "vue";
import "./style.scss";
import "./app.scss";
import App from "./App.vue";
import router from "./router";
import config from "./config";
import tooltip from "@directives/tooltip";
import store from "@store";

const app = createApp(App);
app.config.globalProperties.config = config;

app.directive("tooltip-error", tooltip);

app.use(store);
app.use(router).mount("#app");
