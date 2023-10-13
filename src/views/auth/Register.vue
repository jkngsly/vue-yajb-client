<script>
import AuthService from "@services/AuthService";

const auth = new AuthService();

export default {
  components: {},
  setup(props) {},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: false,
      success: false,
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
      }
    },
  },
};
</script>

<template>
  <div id="login" class="page">
    <h1 id="login-logo">yajb</h1>
    <form class="box rounded" @submit.prevent="register">
      <div v-show="success" class="success rounded">
        {{ config.constants.register.success }}
      </div>
      <div class="error rounded" v-show="error">{{ error }}</div>
      <input type="text" v-model="firstName" placeholder="First Name" />
      <input type="text" v-model="lastName" placeholder="Last Name" />

      <input type="text" class="email" v-model="email" placeholder="E-mail" />
      <input
        type="password"
        class="password"
        v-model="password"
        placeholder="Password"
      />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<style scoped></style>
