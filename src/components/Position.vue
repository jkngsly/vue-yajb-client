<script>
export default {
  props: ["position"],
  setup(props) {},
  data() {
    return {
      ...this.position,
    };
  },
};
</script>

<template>
  <div
    class="position box rounded"
    v-bind:class="active ? 'position-active' : ''"
  >
    <div class="position-top">
      <div class="position-company-logo">
        <img src="../assets/aws.png" />
      </div>
      <div class="position-details">
        <span class="position-title">{{ title }}</span
        ><br />
        <span class="position-company">{{ company }}</span>
      </div>
      <div class="position-details-right">
        <span class="position-salary">{{ salary }}</span>
      </div>
      <div class="position-details-right">
        <span class="position-location">{{ location }}</span>
      </div>
    </div>
    <div class="position-description">
      <span>Job Description</span>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
