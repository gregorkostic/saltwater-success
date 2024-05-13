import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/LandingPage.vue";
import Login from "../views/Login.vue"; // Uvoz Login komponente

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/login", // Putanja za Login
    name: "login",
    component: Login, // Komponenta koja se učitava
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
