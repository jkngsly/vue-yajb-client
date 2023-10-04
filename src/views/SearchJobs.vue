<script>
import PageMenu from "../components/PageMenu.vue";
import Search from "../components/Search.vue";
import Application from "../components/Application.vue";

export default {
  components: { PageMenu, Search, Application },
  setup(props) {},
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <PageMenu />
    <div class="page">
      <Search />
      <Application />
    </div>
  </div>
</template>

<style scoped></style>
