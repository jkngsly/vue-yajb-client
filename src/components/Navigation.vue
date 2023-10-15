<script>
import { RouterLink } from "vue-router";

export default {
  components: {},
  setup(props) {},
  data() {
    return {};
  },
};
</script>

<template>
  <router-link to="/dashboard" id="header-logo"><h1>yajb</h1></router-link>
  <nav>
    <router-link to="/search-jobs" active-class="active">Find Jobs</router-link>
    <router-link to="/my-jobs" active-class="active">My Jobs</router-link>
  </nav>
</template>

<style scoped></style>
