<template>
  <v-app>
    <NavBar />
    <div class="background">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" class="heading">
            <h2>Morske mijene (plime i oseke)</h2>
          </v-col>
          <v-col cols="12" md="10" class="d-flex justify-center">
            <v-card class="tides-card">
              <v-img :src="currentImage" class="tides-img"></v-img>
              <div class="actions">
                <v-btn
                  color="primary"
                  @click="previousImage"
                  :disabled="currentImageIndex === 0"
                >
                  <i class="fas fa-chevron-left"></i> Prethodni mjesec
                </v-btn>
                <v-btn
                  color="primary"
                  @click="nextImage"
                  :disabled="currentImageIndex === images.length - 1"
                >
                  Sljedeći mjesec <i class="fas fa-chevron-right"></i>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" class="heading">
            <h2>Mjesečeve mijene za 2024. godinu</h2>
            <p class="info-text">
              U tablici ispod je prikaz mjesečevih faza (mijena) za Hrvatsku za
              2024 godinu. Četri mjesečeve mijene su: mladi Mjesec ili mlađak
              (mjesec se ne može vidjeti), prva četvrt, puni Mjesec ili uštap
              (potpuno osvijetljena strana je okrenuta prema Zemlji), zadnja
              četvrt. Ove faze se periodično ponavljaju, što uključuje puni krug
              Mjeseca oko Zemlje za 29,5 dana.
            </p>
          </v-col>
          <v-col cols="12" md="10" class="d-flex justify-center">
            <v-card class="phases-card">
              <v-img
                src="@/assets/mjeseceva_faza_2024.png"
                class="phases-img"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <footer class="footer">
        <p>© 2024 Saltwater Success - Raspored ribolova</p>
      </footer>
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import image1 from "@/assets/august_2024.png";
import image2 from "@/assets/december_2024.png";
import image3 from "@/assets/july_2024.png";
import image4 from "@/assets/june_2024.png";
import image5 from "@/assets/november_2024.png";
import image6 from "@/assets/october_2024.png";
import image7 from "@/assets/september_2024.png";

export default {
  name: "FishingSchedule",
  components: {
    NavBar,
  },
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6, image7],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++;
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/background.jpg") !important;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 20px;
  overflow: auto;
}

.heading {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.tides-card,
.phases-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 1000px; /* Adjust max width */
}

.tides-img,
.phases-img {
  width: auto;
  max-width: 100%; /* Ensure images fit within the card */
  height: auto;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.info-text {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.footer {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  width: 100%;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
