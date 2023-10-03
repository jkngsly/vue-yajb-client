<script setup>
import { ref } from "vue";
import Position from "./Position.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div id="results">
    <span>Showing 20 of 70 Results</span>
    <Position />
    <Position />
    <Position />
    <Position />
    <Position />
  </div>
</template>

<style scoped></style>
