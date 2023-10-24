<script>
import AuthService from "@services/AuthService";

const auth = new AuthService();

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: false,
      success: false,
      validationErrors: [],
    };
  },
  methods: {
    async register() {
      this.error = false;
      let response = await auth.register(this.$data);

      console.log(response);
      if (response.success) {
        this.success = true;
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
    <form class="box rounded" @submit.prevent="register">
      <div v-show="success" class="success rounded">
        {{ config.constants.register.success }}
      </div>
      <div class="error rounded" v-show="error">{{ error }}</div>
      <input
        type="text"
        v-model="firstName"
        placeholder="First Name"
        v-tooltip-error="['firstName', validationErrors]"
      />
      <input
        type="text"
        v-model="lastName"
        placeholder="Last Name"
        v-tooltip-error="['lastName', validationErrors]"
      />

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
      <input
        type="password"
        class="password"
        v-model="confirmPassword"
        placeholder="Confirm Password"
        v-tooltip-error="['confirmPassword', validationErrors]"
      />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<style scoped></style>
