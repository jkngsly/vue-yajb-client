import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SearchJobs from "@/views/SearchJobs.vue";
import MyJobs from "@/views/MyJobs.vue";
import Login from "@/views/auth/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "fade" },
  },
  {
    path: "/search-jobs",
    name: "Search Jobs",
    component: SearchJobs,
    meta: { transition: "fade" },
  },
  {
    path: "/my-jobs",
    name: "My Jobs",
    component: MyJobs,
    meta: { transition: "fade" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
