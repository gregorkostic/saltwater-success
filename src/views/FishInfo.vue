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
                Informacije o ribama u Jadranskom moru (Croatia)
              </v-card-title>
              <v-card-text>
                <p class="subheading">Ovo su popularne ribe Jadranskog mora</p>
                <div class="fish-info">
                  <div class="fish-detail">
                    <div class="fish-text">
                      <h3>Brancin (Sea Bass)</h3>
                      <p>
                        <strong>Opis:</strong> Brancin, također poznat kao
                        morski bas, je jedna od najpopularnijih riba za ribolov
                        u Jadranskom moru. Ova riba je poznata po svom ukusnom
                        mesu i može se pronaći duž cijele obale.
                      </p>
                      <p>
                        <strong>Stanište:</strong> Priobalne vode i estuariji.
                      </p>
                      <p><strong>Težina:</strong> Može doseći do 12 kg.</p>
                      <p><strong>Dužina:</strong> Obično oko 50-70 cm.</p>
                    </div>
                    <img
                      src="@/assets/brancin.jpg"
                      alt="Brancin"
                      class="fish-img"
                    />
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="fish-detail reverse">
                    <img
                      src="@/assets/orada.png"
                      alt="Orada"
                      class="fish-img"
                    />
                    <div class="fish-text">
                      <h3>Orada (Gilt-head Bream)</h3>
                      <p>
                        <strong>Opis:</strong> Orada je još jedna cijenjena riba
                        među ribarima. Njezino čvrsto, bijelo meso i ukus čine
                        je omiljenim ulovom. Orada se najčešće nalazi u
                        priobalnim vodama.
                      </p>
                      <p>
                        <strong>Stanište:</strong> Priobalne vode i zaljevi.
                      </p>
                      <p><strong>Težina:</strong> Može doseći do 7 kg.</p>
                      <p><strong>Dužina:</strong> Obično oko 30-50 cm.</p>
                    </div>
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="fish-detail">
                    <div class="fish-text">
                      <h3>Škarpina (Scorpionfish)</h3>
                      <p>
                        <strong>Opis:</strong> Škarpina je poznata po svom
                        jedinstvenom izgledu i ukusnom mesu. Međutim, ribolov na
                        škarpinu zahtijeva oprez zbog njezinih otrovnih bodlji.
                      </p>
                      <p>
                        <strong>Stanište:</strong> Kamenite obale i grebeni.
                      </p>
                      <p><strong>Težina:</strong> Može doseći do 3 kg.</p>
                      <p><strong>Dužina:</strong> Obično oko 20-40 cm.</p>
                    </div>
                    <img
                      src="@/assets/skarpina.jpg"
                      alt="Škarpina"
                      class="fish-img"
                    />
                  </div>

                  <v-divider class="divider"></v-divider>

                  <div class="fish-detail reverse">
                    <img
                      src="@/assets/zubatac.png"
                      alt="Zubatac"
                      class="fish-img"
                    />
                    <div class="fish-text">
                      <h3>Zubatac (Dentex)</h3>
                      <p>
                        <strong>Opis:</strong> Zubatac je velika riba koja je
                        vrlo cijenjena zbog svog delikatnog mesa. Ribolovci ga
                        često traže zbog izazova koje pruža tijekom ribolova.
                      </p>
                      <p>
                        <strong>Stanište:</strong> Priobalne vode i grebeni.
                      </p>
                      <p><strong>Težina:</strong> Može doseći do 15 kg.</p>
                      <p><strong>Dužina:</strong> Obično oko 50-100 cm.</p>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "FishInfo",
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
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.info-card {
  position: relative;
  z-index: 2;
  max-height: 80vh;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subheading {
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
}

.fish-info {
  text-align: left;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
}

.fish-detail {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.fish-detail.reverse {
  flex-direction: row-reverse;
}

.fish-text {
  flex: 1;
  color: #000;
}

.fish-img {
  width: 200px;
  height: auto;
  margin: 10px 20px;
  border-radius: 10px;
}

.divider {
  margin: 20px 0;
}
</style>
