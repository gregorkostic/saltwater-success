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
                  <div
                    class="equipment-detail"
                    v-for="(equipment, index) in equipmentList"
                    :key="index"
                  >
                    <img
                      :src="equipment.image"
                      :alt="equipment.name"
                      class="equipment-img"
                    />
                    <div class="equipment-text">
                      <h3>{{ equipment.name }}</h3>
                      <p><strong>Primjeri:</strong> {{ equipment.examples }}</p>
                      <p>
                        <strong>Karakteristike:</strong>
                        {{ equipment.characteristics }}
                      </p>
                      <p>
                        <strong>Preporuke:</strong>
                        {{ equipment.recommendations }}
                      </p>
                      <div class="feedback-buttons">
                        <v-btn color="blue" @click="likeEquipment(equipment)">
                          <i class="fas fa-thumbs-up"></i> Like
                        </v-btn>
                        <v-btn color="red" @click="dislikeEquipment(equipment)">
                          <i class="fas fa-thumbs-down"></i> Dislike
                        </v-btn>
                      </div>
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
import spinningRodImage from "@/assets/spinning_rod.png";
import jiggingRodImage from "@/assets/jigging_rod.png";
import trollingRodImage from "@/assets/trolling_rod.png";

export default {
  name: "FishingGear",
  components: {
    NavBar,
  },
  data() {
    return {
      equipmentList: [
        {
          name: "Spinning štapovi",
          image: spinningRodImage,
          examples: "Shimano Beastmaster, Daiwa BG, Penn Battalion.",
          characteristics:
            "Lagani i snažni, idealni za brzo bacanje i povlačenje.",
          recommendations:
            "Odlični za lov na plitkim i srednjim dubinama, posebno za lov na brancina i oradu.",
        },
        {
          name: "Jigging štapovi",
          image: jiggingRodImage,
          examples: "Shimano Trevala, Daiwa Saltiga, Okuma Cedros.",
          characteristics:
            "Kratki i snažni štapovi dizajnirani za duboke vode.",
          recommendations:
            "Idealni za lov većih riba poput zubatca u dubokim vodama.",
        },
        {
          name: "Trolling štapovi",
          image: trollingRodImage,
          examples: "Penn International V, Shimano TLD, Daiwa Saltist.",
          characteristics: "Izuzetno snažni štapovi za ribolov s plovila.",
          recommendations: "Najbolji izbor za daleke izlete na otvoreno more.",
        },
      ],
    };
  },
  methods: {
    likeEquipment(equipment) {
      let likedEquipment =
        JSON.parse(localStorage.getItem("likedEquipment")) || [];
      if (!likedEquipment.some((e) => e.name === equipment.name)) {
        likedEquipment.push(equipment);
        localStorage.setItem("likedEquipment", JSON.stringify(likedEquipment));
      }
      console.log(`User liked ${equipment.name}`);
    },
    dislikeEquipment(equipment) {
      console.log(`User disliked ${equipment.name}`);
    },
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

.feedback-buttons {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.feedback-buttons .v-btn {
  color: white;
  margin-right: 10px;
}

.feedback-buttons .v-btn:first-of-type {
  background-color: #1e88e5;
}

.feedback-buttons .v-btn:first-of-type:hover {
  background-color: #1565c0;
}

.feedback-buttons .v-btn:last-of-type {
  background-color: #f44336;
}

.feedback-buttons .v-btn:last-of-type:hover {
  background-color: #d32f2f;
}
</style>
