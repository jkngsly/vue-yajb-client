<script>
import RangeSlider from "@components/form/RangeSlider.vue";
import { ref } from "vue";

const salary = ref("");

export default {
  components: { RangeSlider },
  props: ["visible"],
  watch: {
    visible(n) {
      this.showHide(n);
    },
    salary(n) {
      this.emitFilters();
    },
  },
  data() {
    return {
      salary: [60, 120],
    };
  },
  methods: {
    showHide(show) {
      const el = document.getElementById("search-filters").classList;
      if (show) {
        el.remove("hidden");
        el.add("visible");
      } else {
        el.remove("visible");
        el.add("hidden");
      }
    },

    emitFilters() {
      this.$emit("update:filters", {
        salary: this.salary,
      });
    },
  },
};
</script>

<template>
  <div id="search-filters">
    <form>
      <div class="form-group">
        <label><span>$</span> Salary</label>
        <RangeSlider :value="salary" @update:value="salary = $event" />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
