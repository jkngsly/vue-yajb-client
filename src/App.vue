<script>
import axios from "axios";
import PageMenu from "@components/PageMenu.vue";
import Search from "@components/Search.vue";
import Application from "@components/Application.vue";

// API config
axios.defaults.baseURL = config.api.host;
axios.defaults.headers.post["Content-Type"] = config.api.contentType;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default {
  components: { PageMenu, Search, Application },
  setup(props) {},
  data() {
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
