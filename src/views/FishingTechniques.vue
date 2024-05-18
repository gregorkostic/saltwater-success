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
                Tehnike ribolova u Jadranskom moru
              </v-card-title>
              <v-card-text>
                <p class="subheading">
                  Otkrijte najbolje tehnike za uspješan ribolov
                </p>
                <div class="technique-info">
                  <div class="technique-detail">
                    <img
                      src="@/assets/spinning_technique.jpg"
                      alt="Spinning"
                      class="technique-img"
                    />
                    <div class="technique-text">
                      <h3>Spinning</h3>
                      <p>
                        <strong>Opis:</strong> Spinning je popularna tehnika
                        koja se koristi za lov predatora poput brancina
                        koristeći umjetne mamce.
                      </p>
                      <p>
                        <strong>Kako:</strong> Koristite lagane štapove i brze
                        role s umjetnim mamacima koji imitiraju ribu ili druge
                        životinje.
                      </p>
                      <p>
                        <strong>Savjet:</strong> Odaberite mamac koji odgovara
                        veličini i vrsti riba koje želite loviti.
                      </p>
                    </div>
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="technique-detail reverse">
                    <div class="technique-text">
                      <h3>Jigging</h3>
                      <p>
                        <strong>Opis:</strong> Jigging uključuje korištenje
                        teških metalnih mamaca koji se spuštaju na dno i brzo
                        povlače natrag.
                      </p>
                      <p>
                        <strong>Kako:</strong> Koristite kratke i snažne štapove
                        s teškim mamcima za duboke vode.
                      </p>
                      <p>
                        <strong>Savjet:</strong> Redovito mijenjajte brzinu i
                        dubinu povlačenja za najbolje rezultate.
                      </p>
                    </div>
                    <img
                      src="@/assets/jigging_technique.png"
                      alt="Jigging"
                      class="technique-img"
                    />
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="technique-detail">
                    <img
                      src="@/assets/trolling_technique.jpg"
                      alt="Trolling"
                      class="technique-img"
                    />
                    <div class="technique-text">
                      <h3>Trolling</h3>
                      <p>
                        <strong>Opis:</strong> Trolling se radi s plovila,
                        povlačeći jedan ili više mamaca kroz vodu.
                      </p>
                      <p>
                        <strong>Kako:</strong> Koristite specijalizirane štapove
                        i role za dugo i stabilno povlačenje.
                      </p>
                      <p>
                        <strong>Savjet:</strong> Podesite brzinu plovila za
                        prirodno kretanje mamaca.
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
        <p>© 2024 Saltwater Success - Tehnike ribolova u Jadranskom moru</p>
      </footer>
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

.technique-info {
  text-align: left;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}

.technique-detail {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.technique-detail.reverse {
  flex-direction: row-reverse;
}

.technique-text {
  flex: 1;
  color: #000;
}

.technique-img {
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
