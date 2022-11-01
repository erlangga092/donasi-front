import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/dashboard/Index.vue"
      ),
  },
  {
    path: "/campaign",
    name: "campaign",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/campaign/Index.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/home/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
