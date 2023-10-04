<script setup>
import { ref } from "vue";
const salary = ref(60000);
</script>

<template>
  <div id="search-filters" class="box rounded">
    <header class="rounded sharp-bottom">Filter</header>
    <form>
      <div>
        <input
          v-model="salary"
          type="range"
          min="30000"
          max="500000"
          class="slider"
        />
        <br />
        <input v-model="salary" type="number" disabled />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
