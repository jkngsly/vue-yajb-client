<script>
import SearchResults from "./SearchResults.vue";
import SearchFilters from "./SearchFilters.vue";
import filterIcon from "@assets/filter.svg?raw";

export default {
  components: { SearchResults, SearchFilters },
  setup(props) {},
  data() {
    return { filterIcon, filtersVisible: false };
  },
  methods: {
    showFilters(e) {
      this.filtersVisible = !this.filtersVisible;

      if (this.filtersVisible) {
        e.target.parentElement.classList.add("active");
      } else {
        e.target.parentElement.classList.remove("active");
      }
    },
  },
};
</script>

<template>
  <div id="search">
    <div id="search-bar" class="box rounded">
      <div class="search-field">
        <input
          type="text"
          class="search-title"
          placeholder="Search Job Title"
        />
      </div>
      <div class="search-field">
        <input type="text" class="search-location" placeholder="Location" />
      </div>
      <div class="search-field">
        <button class="dropdown">Job Type</button>
      </div>
      <div class="search-field">
        <button class="dropdown">On-site</button>
      </div>

      <div class="search-field">
        <a class="filter svg-icon" @click="showFilters" v-html="filterIcon"></a>
      </div>
    </div>
    <SearchFilters :visible.sync="filtersVisible" />
    <SearchResults />
  </div>
</template>

<style scoped></style>
