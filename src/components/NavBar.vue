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
    <v-btn text>
      <router-link to="/home" class="white--text no-underline"
        >Explore</router-link
      >
    </v-btn>
    <v-btn text>
      <router-link to="/my-account" class="white--text no-underline"
        >My Account</router-link
      >
    </v-btn>
    <v-btn text @click="signOut" class="sign-out">Sign Out</v-btn>
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
.sign-out {
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
</style>
