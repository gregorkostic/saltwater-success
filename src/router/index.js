import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import FishInfo from "../views/FishInfo.vue";
import FishingTechniques from "../views/FishingTechniques.vue";
import FishingSchedule from "../views/FishingSchedule.vue";
import Equipment from "../views/Equipment.vue";
import Recipes from "../views/Recipes.vue";
import UserExperiences from "../views/UserExperiences.vue";
import MyAccount from "../views/MyAccount.vue";
import LandingPage from "../views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/fish-info",
    name: "fish-info",
    component: FishInfo,
  },
  {
    path: "/fishing-techniques",
    name: "fishing-techniques",
    component: FishingTechniques,
  },
  {
    path: "/fishing-schedule",
    name: "fishing-schedule",
    component: FishingSchedule,
  },
  {
    path: "/equipment",
    name: "equipment",
    component: Equipment,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: Recipes,
  },
  {
    path: "/user-experiences",
    name: "user-experiences",
    component: UserExperiences,
  },
  {
    path: "/my-account",
    name: "my-account",
    component: MyAccount,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
