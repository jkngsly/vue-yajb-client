<script>
import SearchResults from "./SearchResults.vue";
export default {
  components: { SearchResults },
  setup(props) {},
  data() {
    return {};
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
    </div>
    <SearchResults />
  </div>
</template>

<style scoped></style>
