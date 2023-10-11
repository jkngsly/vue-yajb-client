<script>
import PageMenu from "./components/PageMenu.vue";
import Search from "./components/Search.vue";
import Application from "./components/Application.vue";
import AuthService from "./auth/AuthService";

const API_URL = "http://localhost:8000";
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

    return {};
  },
  methods: {
    // this method calls the AuthService login() method
    login(data) {
      auth.login(data.email, data.password);
    },
    register(data) {
      auth.register(data);
    },
    logout() {
      auth.logout();
    },
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
