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
        this.$store.dispatch("user", response.user);
        this.$store.dispatch("token", response.accessToken);
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
  <div id="auth-page" class="page">
    <h1>yajb</h1>
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
