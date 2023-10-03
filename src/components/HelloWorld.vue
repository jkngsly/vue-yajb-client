<script setup>
import { ref } from "vue";
import Search from "./Search.vue";
import Apply from "./Apply.vue";

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
  <div id="page">
    <Search />
    <Apply />
  </div>
</template>

<style scoped></style>
