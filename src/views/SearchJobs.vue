<script>
import PageMenu from "../components/PageMenu.vue";
import Search from "../components/Search.vue";
import Application from "../components/Application.vue";
import SearchFilters from "../components/SearchFilters.vue";

export default {
  components: { PageMenu, Search, Application, SearchFilters },
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
      <SearchFilters />
    </div>
  </div>
</template>

<style scoped></style>
