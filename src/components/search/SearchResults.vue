<script>
import Position from "@components/Position.vue";
import JobService from "@services/JobService";

const jobs = new JobService();

export default {
  components: { Position },

  methods: {
    get: async function () {
      let response = await jobs.get();
      if (response.success) {
        this.jobs = response.jobs;
      } else {
        this.error = response.error;
        this.validationErrors = response.validationErrors;
      }
    },
  },

  data() {
    return {
      jobs: this.get(),
    };
  },
};
</script>

<template>
  <div id="results">
    <span>Showing {{ jobs.length }} of {{ jobs.length }} Results</span>
    <Position v-for="job in jobs" :position="job" />
  </div>
</template>

<style scoped></style>
