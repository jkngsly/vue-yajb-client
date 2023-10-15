import { createApp } from "vue";
import "@/style.scss";
import "@/app.scss";
import App from "@/App.vue";
import router from "@router";
import config from "@config";
import tooltip from "@directives/tooltip";
import rangeSlider from "@directives/range-slider";
import dropDown from "@directives/drop-down";
import store from "@store";

const app = createApp(App);

// Config (@config)
app.config.globalProperties.config = config;

// Directives
app.directive("tooltip-error", tooltip);
app.directive("range-slider", rangeSlider);
app.directive("drop-down", dropDown);

// Vuex
app.use(store);

// Router
app.use(router);

// Bootstrap
app.mount("#app");
