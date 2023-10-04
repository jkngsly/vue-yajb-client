<script>
import PageMenu from "./components/PageMenu.vue";
import Search from "./components/Search.vue";
import Application from "./components/Application.vue";

export default {
  components: { PageMenu, Search, Application },
  setup(props) {},
  data() {
    return {};
  },
};
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped></style>
