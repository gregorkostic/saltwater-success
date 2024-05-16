<template>
  <v-app>
    <NavBar />
    <div class="background">
      <!-- v-container and v-row elements are removed to eliminate the cards -->
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "FishingTechniques",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.background {
  background-image: url(../assets/background.jpg) !important;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
</style>
