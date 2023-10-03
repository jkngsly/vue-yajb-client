<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="position box rounded">
    <div class="position-top">
      <div class="position-company-logo">
        <img src="../assets/aws.png" />
      </div>
      <div class="position-details">
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
    <div class="position-description">
      <span>Job Description</span>
      <p>
        Vivamus ut tempor purus. Cras nec lorem feugiat, ullamcorper diam vitae,
        faucibus lorem. Pellentesque id efficitur sapien. Integer eleifend,
        lectus at viverra posuere, ligula ex cursus urna, efficitur varius urna
        elit at ex. Praesent pulvinar est ut purus lacinia, ut dapibus odio
        commodo. Donec gravida vestibulum diam, vitae laoreet lacus aliquet sed.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Etiam dapibus iaculis sapien a ornare. Morbi congue
        tortornis....
      </p>
    </div>
  </div>
</template>

<style scoped></style>
