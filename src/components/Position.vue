<script>
export default {
  props: ["position"],
  data() {
    return {
      ...this.position,
      descriptionLimit: 600,
      expand: false,
    };
  },
  methods: {
    excerpt: function () {
      return this.description.length > this.descriptionLimit
        ? this.description.substring(0, this.descriptionLimit) + "..."
        : this.description;
    },

    full: function () {
      return this.description;
    },

    showFull: function (e) {
      this.expand = true;
    },

    showExcerpt: function (e) {
      this.expand = false;
    },
  },
};
</script>

<template>
  <div
    class="position box rounded"
    v-bind:class="expand ? 'position-active' : ''"
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
    <div class="position-description" @click="(e) => showFull(e)">
      <span>Job Description</span>
      <p>{{ expand ? full(description) : excerpt(description) }}</p>
    </div>
  </div>
</template>

<style scoped></style>
