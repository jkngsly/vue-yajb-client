<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <header>
    <a href="#" id="header-logo"><h1>yajb</h1></a>
    <nav>
      <a href="#" class="active">Find Jobs</a>
      <a href="#">My Jobs</a>
      <a href="#">Menu Item</a>
      <a href="#">Menu Item</a>
    </nav>
  </header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
