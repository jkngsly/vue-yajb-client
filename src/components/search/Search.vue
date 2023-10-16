<script>
import SearchResults from "@components/search/SearchResults.vue";
import SearchFilters from "@components/search/SearchFilters.vue";
import SearchBar from "@components/search/SearchBar.vue";
import { ref } from "vue";

const filters = ref("");
const extraFilters = ref("");

export default {
  components: { SearchResults, SearchFilters, SearchBar },
  watch: {
    filters(n) {
      console.log(n);
      this.preview();
    },

    extraFilters(n) {
      this.preview();
    },
  },
  data() {
    return {
      filters: {},
      extraFilters: {},
      extraFiltersVisible: false,
    };
  },
  methods: {
    preview() {
      let filters = {
        ...this.filters,
        ...this.extraFilters,
      };

      console.log(filters);
    },
  },
};
</script>

<template>
  <div id="search">
    <SearchBar
      @update:filters="filters = $event"
      @show:extraFilters="extraFiltersVisible = $event"
    ></SearchBar>
    <SearchFilters
      @update:filters="extraFilters = $event"
      :visible.sync="extraFiltersVisible"
    />
    <SearchResults />
  </div>
</template>

<style scoped></style>
