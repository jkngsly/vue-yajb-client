<script>
import { ref } from "vue";
let checked = ref("");

export default {
  props: {
    value: false,
  },
  setup(props) {
    console.log(props.value);
    checked = props.value;
  },
  components: {},
  data() {
    return {
      checked: checked,
    };
  },
  methods: {
    update: function (e) {
      console.log(e);
    },
  },
};
</script>

<template>
  <div class="toggle" v-toggle="checked" @update:value="update(value)"></div>
</template>

<style scoped></style>
