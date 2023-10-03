<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div id="apply" class="box rounded">
    <header class="rounded sharp-bottom">Application</header>
  </div>
</template>

<style scoped></style>
