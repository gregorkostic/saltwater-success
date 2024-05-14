import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

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
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
