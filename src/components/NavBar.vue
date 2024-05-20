<template>
  <v-app-bar app flat color="transparent">
    <v-toolbar-title class="white--text logo-container">
      <div class="white--text no-underline logo-link">
        <img
          src="../assets/fish_logo.png"
          alt="Saltwater Success Logo"
          class="logo-img"
        />
        <span class="logo-text">Saltwater Success</span>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="nav-button" :class="{ active: $route.path === '/home' }">
      <router-link to="/home" class="white--text no-underline"
        >Explore</router-link
      >
    </v-btn>
    <v-btn
      text
      class="nav-button"
      :class="{ active: $route.path === '/my-account' }"
    >
      <router-link to="/my-account" class="white--text no-underline"
        >My Account</router-link
      >
    </v-btn>
    <v-btn text @click="signOut" class="log-out">Log Out</v-btn>
  </v-app-bar>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  methods: {
    signOut() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
.v-btn {
  font-size: 0.9rem;
  color: white !important;
}
.log-out {
  padding-left: 10px;
  color: white !important;
}
.logo-container {
  display: flex;
  align-items: center;
}
.logo-link {
  display: flex;
  align-items: center;
}
.logo-img {
  max-height: 40px;
  margin-right: 10px;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-button {
  border: 2px solid transparent; /* Default transparent border */
  margin: 0 10px; /* Adjust as needed */
  transition: border-color 0.3s;
}
.nav-button.active {
  border-color: white; /* White border when active */
}
</style>
