import { createWebHistory, createRouter } from "vue-router";
import store from "@store/index";
import Home from "@views/Home.vue";
import SearchJobs from "@views/SearchJobs.vue";
import MyJobs from "@views/MyJobs.vue";
import Login from "@views/auth/Login.vue";
import Register from "@views/auth/Register.vue";

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
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const excluded = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  /*
  if (store.getters.loginState) {
    if (to.path === "/login") next("/");
    else next();
  } else {
    if (to.path === "/login") next();
    else next("/login");
  }*/
  next();
});

export default router;
