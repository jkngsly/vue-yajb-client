<script>
import { watch, ref } from "vue";
let parentValue = ref("");
let min = ref("");
let max = ref("");

export default {
  props: {
    value: {
      default: [60000, 90000],
    },
    min: {
      default: [30000],
    },
    max: {
      default: [200000],
    },
  },
  emits: ["update:value"],
  setup(props) {
    parentValue = props.value;
    min = props.min;
    max = props.max;
  },
  components: {},
  data() {
    return {
      parentValue: parentValue,
      options: {
        start: parentValue,
        range: [min, max],
      },
    };
  },
};
</script>

<template>
  <div>
    <label>{{ parentValue[0] + " - " + parentValue[1] }}</label>
    <div v-range-slider="options"></div>
  </div>
</template>

<style scoped></style>
