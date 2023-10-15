<script>
import { watch, ref } from "vue";
let parentValue = ref("");
let min = ref("");
let max = ref("");

export default {
  props: {
    value: {
      default: [60, 90],
    },
    min: {
      default: [20],
    },
    max: {
      default: [200],
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
  <div v-range-slider="options"></div>
</template>

<style scoped></style>
