<template>
  <v-app>
    <NavBar />
    <div class="background">
      <div class="overlay"></div>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card class="info-card">
              <v-card-title class="headline">
                Oprema za ribolov u Jadranskom moru
              </v-card-title>
              <v-card-text>
                <p class="subheading">
                  Pregled esencijalne opreme za različite tehnike ribolova
                </p>
                <div class="equipment-info">
                  <div class="equipment-detail">
                    <img
                      src="@/assets/spinning_rod.png"
                      alt="Spinning štap"
                      class="equipment-img"
                    />
                    <div class="equipment-text">
                      <h3>Spinning štapovi</h3>
                      <p>
                        <strong>Primjeri:</strong> Shimano Beastmaster, Daiwa
                        BG, Penn Battalion.
                      </p>
                      <p>
                        <strong>Karakteristike:</strong> Lagani i snažni,
                        idealni za brzo bacanje i povlačenje.
                      </p>
                      <p>
                        <strong>Preporuke:</strong> Odlični za lov na plitkim i
                        srednjim dubinama, posebno za lov na brancina i oradu.
                      </p>
                    </div>
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="equipment-detail reverse">
                    <div class="equipment-text">
                      <h3>Jigging štapovi</h3>
                      <p>
                        <strong>Primjeri:</strong> Shimano Trevala, Daiwa
                        Saltiga, Okuma Cedros.
                      </p>
                      <p>
                        <strong>Karakteristike:</strong> Kratki i snažni štapovi
                        dizajnirani za duboke vode.
                      </p>
                      <p>
                        <strong>Preporuke:</strong> Idealni za lov većih riba
                        poput zubatca u dubokim vodama.
                      </p>
                    </div>
                    <img
                      src="@/assets/jigging_rod.png"
                      alt="Jigging štap"
                      class="equipment-img"
                    />
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="equipment-detail">
                    <img
                      src="@/assets/trolling_rod.png"
                      alt="Trolling štap"
                      class="equipment-img"
                    />
                    <div class="equipment-text">
                      <h3>Trolling štapovi</h3>
                      <p>
                        <strong>Primjeri:</strong> Penn International V, Shimano
                        TLD, Daiwa Saltist.
                      </p>
                      <p>
                        <strong>Karakteristike:</strong> Izuzetno snažni štapovi
                        za ribolov s plovila.
                      </p>
                      <p>
                        <strong>Preporuke:</strong> Najbolji izbor za daleke
                        izlete na otvoreno more.
                      </p>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <footer class="footer">
        <p>© 2024 Saltwater Success - Oprema za ribolov u Jadranskom moru</p>
      </footer>
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "FishingGear",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.background {
  position: relative;
  background-image: url("@/assets/background.jpg") !important;
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
  overflow: hidden; /* Ensure background is static */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Dark overlay */
  z-index: 1;
}

.info-card {
  position: relative;
  z-index: 2;
  max-height: 80vh; /* Limit the card height */
  overflow-y: auto; /* Enable vertical scrolling */
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subheading {
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
}

.equipment-info {
  text-align: left;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
}

.equipment-detail {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.equipment-detail.reverse {
  flex-direction: row-reverse;
}

.equipment-text {
  flex: 1;
  color: #000;
}

.equipment-img {
  width: 200px;
  height: auto;
  margin: 10px 20px;
  border-radius: 10px;
}

.divider {
  margin: 20px 0;
}

.footer {
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  width: 100%;
  padding: 10px;
  text-align: center;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  border-radius: 0 0 10px 10px;
}
</style>
