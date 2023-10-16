<script>
import Nav from "@components/nav/Nav.vue";
import api from "@config/api";
import { useRoute } from "vue-router";
import { computed } from "vue";

api.init();

export default {
  components: { Nav },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  data() {
    return {
      "call-response": "",
    };
  },
  methods: {
    invoke(data) {
      if (data.method) return this[data.method](data);
    },
    showMenu() {
      return ![
        "Register",
        "Login",
        "Forgot Password",
        "Reset Password",
      ].includes(this.currentRouteName);
    },
  },
};
</script>

<template>
  <Nav v-if="showMenu()"></Nav>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component v-on:call="invoke" :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped></style>
