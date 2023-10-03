<script setup>
import { ref } from "vue";
import SearchResults from "./SearchResults.vue";

defineProps({
  msg: String,
});

const count = ref(0);
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
