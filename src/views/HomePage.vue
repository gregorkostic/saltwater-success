<template>
  <v-app>
    <div class="background">
      <div class="top-left-bar">
        <img
          src="../assets/fish_logo.png"
          alt="Saltwater Success Logo"
          class="logo"
        />
        <span class="logo-text">Saltwater Success</span>
      </div>
      <div class="content">
        <h1>Dobrodošli u Saltwater Success</h1>
        <p>Vaš izvor za sve informacije o ribolovu.</p>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <v-card>
              <v-card-title>Informacije o ribama</v-card-title>
              <v-card-text
                >Saznajte više o različitim vrstama riba.</v-card-text
              >
              <v-card-actions>
                <v-btn color="primary" @click="$router.push('/fish-info')"
                  >Saznajte više</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card>
              <v-card-title>Tehnike ribolova</v-card-title>
              <v-card-text
                >Otkrijte najbolje tehnike za uspješan ribolov.</v-card-text
              >
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="$router.push('/fishing-techniques')"
                  >Saznajte više</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card>
              <v-card-title>Raspored ribolova</v-card-title>
              <v-card-text
                >Provjerite kada je najbolje vrijeme za ribolov.</v-card-text
              >
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="$router.push('/fishing-schedule')"
                  >Saznajte više</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card>
              <v-card-title>Oprema za ribolov</v-card-title>
              <v-card-text
                >Informacije o potrebnoj opremi za ribolov.</v-card-text
              >
              <v-card-actions>
                <v-btn color="primary" @click="$router.push('/equipment')"
                  >Saznajte više</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card>
              <v-card-title>Recepti</v-card-title>
              <v-card-text
                >Pronađite recepte za pripremu različitih vrsta
                riba.</v-card-text
              >
              <v-card-actions>
                <v-btn color="primary" @click="$router.push('/recipes')"
                  >Saznajte više</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card>
              <v-card-title>Iskustva korisnika</v-card-title>
              <v-card-text
                >Podijelite svoja iskustva i saznajte više od drugih
                korisnika.</v-card-text
              >
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="$router.push('/user-experiences')"
                  >Saznajte više</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "HomePage",
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

.top-left-bar {
  position: absolute;
  top: 1%;
  left: 0.5%;
  display: flex;
  align-items: center;
  color: white;
}

.logo {
  max-height: 60px;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.content {
  color: white;
  margin-bottom: 40px;
}

.v-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-row {
  width: 100%;
  justify-content: space-around;
}
</style>
