<script>
import PageMenu from "@components/PageMenu.vue";
import Search from "@components/Search.vue";
import Application from "@components/Application.vue";
import api from "@config/api";

api.init();

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
