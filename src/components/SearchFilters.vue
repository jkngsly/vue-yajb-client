<script>
import RangeSlider from "@components/form/RangeSlider.vue";
import { ref } from "vue";

const salary = ref("");

export default {
  components: { RangeSlider },
  setup(props) {},
  data() {
    return {
      salary: [60, 120],
    };
  },
};
</script>

<template>
  <div id="search-filters" class="box rounded">
    <header class="rounded sharp-bottom">Filter</header>
    <form>
      <div class="form-group">
        <label>Salary</label>
        <RangeSlider :value="salary" @update:value="salary = $event" />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
