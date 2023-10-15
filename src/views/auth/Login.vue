<script>
import AuthService from "@services/AuthService";

const auth = new AuthService();

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      validationErrors: [],
    };
  },
  methods: {
    async login() {
      let response = await auth.login(this.email, this.password);
      if (response.success) {
        this.$store.dispatch("loginState", true);
        this.$router.push("/");
      } else {
        this.error = response.error;
        this.validationErrors = response.validationErrors;
      }
    },
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
        v-model="email"
        placeholder="E-mail"
        v-tooltip-error="['email', validationErrors]"
      />
      <input
        type="password"
        class="password"
        v-model="password"
        placeholder="Password"
        v-tooltip-error="['password', validationErrors]"
      />
      <input type="submit" value="Login" />>
    </form>
  </div>
</template>

<style scoped></style>
