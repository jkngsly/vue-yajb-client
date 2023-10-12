<script>
import AuthService from "../../auth/AuthService";

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
    };
  },
  methods: {
    async register() {
      let response = await auth.register(this.$data);

      if (response.success) {
        this.$router.push("/login");
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
      <div class="error rounded" v-show="error !== false">{{ error }}</div>
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
