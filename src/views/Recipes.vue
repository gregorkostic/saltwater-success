<template>
  <v-app>
    <NavBar />
    <div class="background">
      <v-container fluid>
        <v-row justify="center" v-if="!selectedFish">
          <v-col cols="12" class="heading">
            <h2>Izaberite koji recept želite:</h2>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="3"
            v-for="fish in fishes"
            :key="fish.name"
            @click="selectFish(fish)"
          >
            <v-card class="fish-card">
              <v-img :src="fish.image" class="fish-img"></v-img>
              <v-card-title class="fish-title">{{ fish.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" v-else>
          <v-col cols="12" md="8">
            <v-card class="recipe-card">
              <v-card-title class="headline">{{
                selectedFish.name
              }}</v-card-title>
              <v-card-text>
                <div class="recipe-content">
                  <div class="recipe-text">
                    <p v-html="selectedFish.recipe"></p>
                    <p>
                      <a :href="selectedFish.source" target="_blank"
                        >Izvor recepta</a
                      >
                    </p>
                  </div>
                  <v-img :src="selectedFish.dishImage" class="dish-img"></v-img>
                </div>
              </v-card-text>
              <v-btn color="primary" @click="selectedFish = null"
                >Back to Recipes</v-btn
              >
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
  name: "Recipes",
  components: {
    NavBar,
  },
  data() {
    return {
      fishes: [
        {
          name: "Brancin",
          image: require("@/assets/brancin.jpg"),
          dishImage: require("@/assets/brancin_dish.jpg"),
          source:
            "https://www.morski.hr/zelina-kuzina-lubin-ili-brancin-pecen-u-soli/",
          recipe: `
            <h3>Lubin ili Brancin pečen u soli</h3>
            <p>
              <strong>Sastojci:</strong>
              <ul>
                <li>1 brancin (lubin), oko 1 kg</li>
                <li>2 kg krupne morske soli</li>
                <li>1 limun</li>
                <li>Maslinovo ulje</li>
                <li>Ružmarin</li>
                <li>Timiijan</li>
              </ul>
            </p>
            <p>
              <strong>Priprema:</strong>
              <ol>
                <li>Ribu očistite, odstranite škrge i iznutrice, ali ne uklanjajte ljuske.</li>
                <li>Ribu napunite kriškama limuna i začinima.</li>
                <li>U posudu za pečenje stavite sloj soli, položite ribu i prekrijte je ostatkom soli.</li>
                <li>Pecite u prethodno zagrijanoj pećnici na 200°C oko 45 minuta.</li>
                <li>Nakon pečenja, pažljivo uklonite sol i skinite kožu s ribe.</li>
              </ol>
            </p>`,
        },
        {
          name: "Orada",
          image: require("@/assets/orada.png"),
          dishImage: require("@/assets/orada_dish.jpg"),
          source:
            "https://web.coolinarika.com/recept/orada-iz-pecnice-d53c3194-63c8-11eb-bf2b-0242ac120090",
          recipe: `
            <h3>Orada iz pećnice</h3>
            <p>
              <strong>Sastojci:</strong>
              <ul>
                <li>1 orada, oko 1 kg</li>
                <li>2 krumpira</li>
                <li>2 mrkve</li>
                <li>1 crvena paprika</li>
                <li>1 limun</li>
                <li>Maslinovo ulje</li>
                <li>Ružmarin</li>
                <li>Sol i papar</li>
              </ul>
            </p>
            <p>
              <strong>Priprema:</strong>
              <ol>
                <li>Oradu očistite i posolite.</li>
                <li>Povrće narežite na kriške i posložite u posudu za pečenje.</li>
                <li>Na povrće položite oradu i prelijte maslinovim uljem.</li>
                <li>Pecite u pećnici zagrijanoj na 180°C oko 45 minuta.</li>
                <li>Poslužite uz limun i začinsko bilje.</li>
              </ol>
            </p>`,
        },
        {
          name: "Škarpina",
          image: require("@/assets/skarpina.jpg"),
          dishImage: require("@/assets/skarpina_dish.jpg"),
          source:
            "https://www.podravka.hr/recept/787868/socna-pecena-skarpina/",
          recipe: `
            <h3>Sočna pečena škarpina</h3>
            <p>
              <strong>Sastojci:</strong>
              <ul>
                <li>1 škarpina, oko 1 kg</li>
                <li>4 krumpira</li>
                <li>2 luka</li>
                <li>2 rajčice</li>
                <li>Maslinovo ulje</li>
                <li>Ružmarin</li>
                <li>Sol i papar</li>
              </ul>
            </p>
            <p>
              <strong>Priprema:</strong>
              <ol>
                <li>Škarpinu očistite i posolite.</li>
                <li>Krumpire narežite na ploške i stavite u posudu za pečenje.</li>
                <li>Dodajte narezani luk i rajčice.</li>
                <li>Na povrće položite škarpinu, prelijte maslinovim uljem i pospite ružmarinom.</li>
                <li>Pecite u pećnici zagrijanoj na 200°C oko 45 minuta.</li>
                <li>Poslužite uz salatu po želji.</li>
              </ol>
            </p>`,
        },
        {
          name: "Zubatac",
          image: require("@/assets/zubatac.png"),
          dishImage: require("@/assets/zubatac_dish.jpg"),
          source:
            "https://ordinacija.tv/zubatac-riba-za-zdravlje-srca-recept-za-pripremu/",
          recipe: `
            <h3>Zubatac pečen u pećnici</h3>
            <p>
              <strong>Sastojci:</strong>
              <ul>
                <li>1 zubatac, oko 1.5 kg</li>
                <li>4 krumpira</li>
                <li>2 mrkve</li>
                <li>2 limuna</li>
                <li>Maslinovo ulje</li>
                <li>Ružmarin</li>
                <li>Sol i papar</li>
              </ul>
            </p>
            <p>
              <strong>Priprema:</strong>
              <ol>
                <li>Zubaca očistite i posolite.</li>
                <li>Krumpire i mrkve narežite na ploške i stavite u posudu za pečenje.</li>
                <li>Dodajte narezane limune.</li>
                <li>Na povrće položite zubaca, prelijte maslinovim uljem i pospite ružmarinom.</li>
                <li>Pecite u pećnici zagrijanoj na 200°C oko 1 sat.</li>
              </ol>
            </p>`,
        },
      ],
      selectedFish: null,
    };
  },
  methods: {
    selectFish(fish) {
      this.selectedFish = fish;
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/background.jpg") !important;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.fish-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.fish-card:hover {
  transform: scale(1.05);
}

.fish-img {
  height: 200px;
  object-fit: cover;
}

.fish-title {
  text-align: center;
  font-weight: bold;
}

.recipe-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.recipe-text {
  flex: 2;
  text-align: left;
}

.dish-img {
  flex: 1;
  height: 200px;
  object-fit: cover;
  margin-left: 20px;
  border-radius: 10px;
}

.v-btn {
  background-color: #1e88e5;
  color: white;
  margin-top: 20px;
}

.v-btn:hover {
  background-color: #1565c0;
}
</style>
