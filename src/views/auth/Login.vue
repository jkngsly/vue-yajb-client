<script>
import AuthService from "@services/AuthService";

const auth = new AuthService();

export default {
  components: {},
  setup(props) {},
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    async login() {
      let response = await auth.login(this.email, this.password);

      if (response.success) {
        this.$router.push("/");
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
    <form class="box rounded" @submit.prevent="login">
      <div class="error rounded" v-show="error !== false">{{ error }}</div>
      <input type="text" class="email" v-model="email" placeholder="E-mail" />
      <input
        type="password"
        class="password"
        v-model="password"
        placeholder="Password"
      />
      <input type="submit" value="Login" />>
    </form>
  </div>
</template>

<style scoped></style>
