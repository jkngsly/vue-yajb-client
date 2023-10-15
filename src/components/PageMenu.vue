<script>
import User from "./User.vue";
import Navigation from "./Navigation.vue";
export default {
  components: { User, Navigation },
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <Navigation />
    <User />
  </header>
</template>

<style scoped></style>
