<script>
import JobService from "@services/JobService";
import { QuillEditor } from "@vueup/vue-quill";
import Toggle from "@components/form/Toggle.Vue";
import RangeSlider from "@components/form/RangeSlider.vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";

const job = new JobService();
const salary = ref("");

export default {
  components: { QuillEditor, Toggle, RangeSlider },
  data() {
    return {
      title: "",
      description: "",
      salary: [60, 120],
      open: true,
      error: false,
      validationErrors: [],
      fiexed: false,
    };
  },

  methods: {
    async login() {
      /* let response = await auth.login(this.email, this.password);
      if (response.success) {
      } else {
        this.error = response.error;
        this.validationErrors = response.validationErrors;
      }*/
    },

    clear() {},
  },
};
</script>

<template>
  <div id="create-job" class="page">
    <form class="box rounded flex flex-col" @submit.prevent="login">
      <h1 class="">Create a New Job</h1>
      <div class="error rounded" v-show="error !== false">{{ error }}</div>
      <div class="mb-4">
        <labe class="mb-3" l>Title</labe>
        <input
          type="text"
          v-model="title"
          placeholder="Job Title"
          v-tooltip-error="['title', validationErrors]"
        />
      </div>
      <div class="mb-4 flex flex-col">
        <label class="mb-3">Description</label>
        <QuillEditor theme="snow" />
      </div>
      <div class="mb-4">
        <label style="width: 100px; float: left">Hiring</label>
        <Toggle :value="true" />
      </div>
      <div class="mb-4">
        <label>Salary</label>
        <RangeSlider :value="salary" @update:value="salary = $event" />
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<style scoped></style>
