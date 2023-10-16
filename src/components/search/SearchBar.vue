<script>
import filterIcon from "@assets/filter.svg?raw";
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
        jobType: this.jobType,
        datePosted: this.datePosted,
      });
    },
  },
};
</script>

<template>
  <div id="search-bar" class="box rounded">
    <div class="search-field">
      <input type="text" class="search-title" placeholder="Search Job Title" />
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
      <a
        class="filter svg-icon"
        @click="showExtraFilters"
        v-html="filterIcon"
      ></a>
    </div>
  </div>
</template>

<style scoped></style>
