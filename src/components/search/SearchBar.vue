<script>
import filterIcon from "@assets/filter.svg?raw";
import searchIcon from "@assets/search.svg?raw";
import DropDown from "@components/form/DropDown.vue";

export default {
  components: { DropDown },
  watch: {
    datePosted(n) {
      this.updateFilters();
    },

    jobType(n) {
      this.updateFilters();
    },
  },
  data() {
    let jobPostedOptions = [
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
      // Buttons
      searchIcon,
      filterIcon,

      // Dropdown options
      jobPostedOptions,
      jobTypeOptions,

      // Search filters
      jobTitle: "",
      jobLocation: "",
      jobType: jobTypeOptions[0],
      jobPosted: jobPostedOptions[0],

      // Extra Filters
      filtersVisible: false,
    };
  },
  methods: {
    showExtraFilters(e) {
      this.filtersVisible = !this.filtersVisible;

      console.log(e.target.parentElement.classList);
      if (this.filtersVisible) {
        e.target.parentElement.classList.add("active");
      } else {
        e.target.parentElement.classList.remove("active");
      }

      this.$emit("show:extraFilters", this.filtersVisible);
    },

    updateFilters() {
      this.$emit("update:filters", {
        jobTitle: this.jobTitle,
        jobLocation: this.jobLocation,
        jobType: this.jobType,
        jobPosted: this.jobPosted,
      });
    },
  },
};
</script>

<template>
  <div id="search-bar" class="box rounded">
    <div class="search-field">
      <input
        type="text"
        class="search-title"
        placeholder="Search Job Title"
        v-model="jobTitle"
      />
    </div>
    <div class="search-field">
      <input
        type="text"
        class="search-location"
        placeholder="Location"
        v-model="jobLocation"
      />
    </div>
    <div class="search-field search-field-dropdown">
      <DropDown
        :options="jobPostedOptions"
        :value="jobPosted"
        :className="'search-time'"
        @update:value="jobPosted = $event.text"
      ></DropDown>
    </div>
    <div class="search-field search-field-dropdown">
      <DropDown
        :options="jobTypeOptions"
        :value="jobType"
        :className="'search-job-type'"
        @update:value="jobType = $event.text"
      ></DropDown>
    </div>

    <div class="search-field no-border">
      <a
        class="filter svg-icon"
        @click="showExtraFilters"
        v-html="filterIcon"
      ></a>
    </div>
    <div class="search-field no-border search-field-button">
      <a class="svg-icon" @click="" v-html="searchIcon"></a>
    </div>
  </div>
</template>

<style scoped></style>
