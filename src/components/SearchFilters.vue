<script>
import RangeSlider from "@components/form/RangeSlider.vue";
import { ref } from "vue";

const salary = ref("");

export default {
  components: { RangeSlider },
  setup(props) {},
  data() {
    return {
      salary: [60000, 200000],
    };
  },
};
</script>

<template>
  <div id="search-filters" class="box rounded">
    <header class="rounded sharp-bottom">Filter</header>
    <form>
      <RangeSlider :value="salary" @update:value="salary = $event" />
    </form>
  </div>
</template>

<style scoped></style>
