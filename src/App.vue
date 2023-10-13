<script>
import axios from "axios";
import PageMenu from "@components/PageMenu.vue";
import Search from "@components/Search.vue";
import Application from "@components/Application.vue";
import AuthService from "@services/AuthService";

axios.defaults.baseURL = "http://localhost:3000";
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const auth = new AuthService();

export default {
  components: { PageMenu, Search, Application },
  setup(props) {},
  data() {
    /*this.authenticated = false;

    
    auth.authNotifier.on("authChange", (authState) => {
      this.authenticated = authState.authenticated;
    });

    return {
      authenticated: false,
      message: "",
    };*/

    return {
      "call-response": "",
    };
  },
  methods: {
    invoke(data) {
      if (data.method) return this[data.method](data);
    },
  },
};
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component v-on:call="invoke" :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped></style>
