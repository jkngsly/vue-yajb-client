<script>
export default {
  data() {
    return {
      token: this.$store.getters.token,
      user: this.$store.getters.user,
    };
  },
};
</script>

<template>
  <div class="page">WELCOME {{ user }} {{ token }}</div>
</template>

<style scoped></style>
