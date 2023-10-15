<script>
import SearchResults from "@components/SearchResults.vue";
import SearchFilters from "@components/SearchFilters.vue";
import filterIcon from "@assets/filter.svg?raw";
import DropDown from "@components/form/DropDown.vue";

export default {
  components: { SearchResults, SearchFilters, DropDown },
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
      <div class="search-field search-field-dropdown">
        <DropDown></DropDown>
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
