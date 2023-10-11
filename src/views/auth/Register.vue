<script>
export default {
  components: {},
  setup(props) {},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log("hi");
      this.$emit("call", {
        method: "register",
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<template>
  <div id="login" class="page">
    <h1 id="login-logo">yajb</h1>
    <form class="box rounded">
      <input type="text" v-model="firstName" placeholder="firstName" />
      <input type="text" v-model="lastName" placeholder="lastName" />

      <input type="text" class="email" v-model="email" placeholder="E-mail" />
      <input
        type="password"
        class="password"
        v-model="password"
        placeholder="Password"
      />
      <input type="button" value="Register" @click="register()" />
    </form>
  </div>
</template>

<style scoped></style>
