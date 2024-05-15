<template>
  <v-app>
    <NavBar />
    <div class="background">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Informacije o ribama</v-card-title>
              <v-card-text>
                <!-- Your content here -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "FishInfo",
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.v-container {
  margin-top: 60px;
  overflow-y: auto;
  height: calc(100vh - 60px);
}

.v-card {
  background-color: rgba(255, 255, 255, 0.85);
}
</style>
