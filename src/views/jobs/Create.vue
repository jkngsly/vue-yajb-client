<script>
import JobService from "@services/JobService";

const job = new JobService();

export default {
  data() {
    return {
      title: "",
      description: "",
      salary: false,
      open: true,
      error: false,
      validationErrors: [],
    };
  },

  methods: {
    async login() {
      let response = await auth.login(this.email, this.password);
      if (response.success) {
      } else {
        this.error = response.error;
        this.validationErrors = response.validationErrors;
      }
    },

    clear() {},
  },
};
</script>

<template>
  <div id="login" class="page">
    <h1 id="login-logo">yajb</h1>
    <form class="box rounded" @submit.prevent="login">
      <div class="error rounded" v-show="error !== false">{{ error }}</div>
      <input
        type="text"
        class="email"
        v-model="title"
        placeholder="Job Title"
        v-tooltip-error="['title', validationErrors]"
      />
      <input type="submit" value="Login" />>
    </form>
  </div>
</template>

<style scoped></style>
