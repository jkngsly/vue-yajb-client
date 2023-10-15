<script>
import Search from "@components/Search.vue";
import Application from "@components/Application.vue";
import SearchFilters from "@components/SearchFilters.vue";

export default {
  components: { Search, Application, SearchFilters },
  setup(props) {},
  data() {
    return {};
  },
};
</script>

<template>
  <div class="page search-page">
    <Search />
  </div>
</template>

<style scoped></style>
