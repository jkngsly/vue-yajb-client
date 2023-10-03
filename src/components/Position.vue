<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="position box rounded">
    <div class="position-top">
      <img src="../assets/aws.png" class="position-company-logo" />
      <div>
        <span class="position-title">Senior DevOps Engineer</span><br />
        <span class="position-company">Amazon Web Services</span>
      </div>
      <div class="position-details-right">
        <span class="position-salary">125,000 - 175,000</span>
      </div>
      <div class="position-details-right">
        <span class="position-location">United States (Remote)</span>
      </div>
    </div>
    <div class="position-description"></div>
  </div>
</template>

<style scoped></style>
