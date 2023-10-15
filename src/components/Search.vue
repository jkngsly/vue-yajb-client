<script>
import SearchResults from "@components/SearchResults.vue";
import SearchFilters from "@components/SearchFilters.vue";
import filterIcon from "@assets/filter.svg?raw";
import DropDown from "@components/form/DropDown.vue";

export default {
  components: { SearchResults, SearchFilters, DropDown },
  watch: {
    datePosted(n) {
      console.log(n);
    },
  },
  data() {
    let datePostedOptions = [
      {
        text: "Today",
      },
      {
        text: "Past 3 Days",
      },
      {
        text: "Past Week",
      },
      {
        text: "Past Month",
      },
    ];

    let jobTypeOptions = [
      {
        text: "On-site",
      },
      {
        text: "Remote",
      },
      {
        text: "Hybrid",
      },
    ];

    return {
      filterIcon,
      filtersVisible: false,
      datePostedOptions,
      datePosted: datePostedOptions[0],
      jobTypeOptions,
      jobType: jobTypeOptions[0],
    };
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
        <DropDown
          :options="datePostedOptions"
          :value="datePosted"
          :className="'search-time'"
          @update:value="datePosted = $event"
        ></DropDown>
      </div>
      <div class="search-field search-field-dropdown">
        <DropDown
          :options="jobTypeOptions"
          :value="jobType"
          :className="'search-job-type'"
          @update:value="jobType = $event"
        ></DropDown>
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
