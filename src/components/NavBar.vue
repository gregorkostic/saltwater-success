<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="white--text">
      <router-link to="/" class="white--text no-underline">
        Saltwater Success
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <router-link to="/fish-info" class="white--text no-underline"
        >Informacije o ribama</router-link
      >
    </v-btn>
    <v-btn text>
      <router-link to="/fishing-techniques" class="white--text no-underline"
        >Tehnike ribolova</router-link
      >
    </v-btn>
    <v-btn text>
      <router-link to="/fishing-schedule" class="white--text no-underline"
        >Raspored ribolova</router-link
      >
    </v-btn>
    <v-btn text>
      <router-link to="/equipment" class="white--text no-underline"
        >Oprema za ribolov</router-link
      >
    </v-btn>
    <v-btn text>
      <router-link to="/recipes" class="white--text no-underline"
        >Recepti</router-link
      >
    </v-btn>
    <v-btn text>
      <router-link to="/user-experiences" class="white--text no-underline"
        >Iskustva korisnika</router-link
      >
    </v-btn>
    <v-btn text @click="signOut" class="sign-out"> Sign Out </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    signOut() {
      this.$router.push("/"); // Redirect to landing page
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
}
.sign-out {
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding-left: 10px;
}
</style>
