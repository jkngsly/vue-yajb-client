<script>
import notificationIcon from "@assets/notification.svg?raw";

export default {
  data() {
    return {
      notificationIcon,
    };
  },
  methods: {},
};
</script>

<template>
  <div id="user">
    <a class="notifications svg-icon" v-html="notificationIcon"></a>
    <router-link to="/login" class="user"></router-link>
  </div>
</template>

<style scoped></style>
