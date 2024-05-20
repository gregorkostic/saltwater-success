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
                <div class="actions">
                  <v-btn color="primary" @click="selectedFish = null">
                    Back to Recipes
                  </v-btn>
                  <div class="feedback-buttons">
                    <v-btn color="blue" @click="likeRecipe">
                      <i class="fas fa-thumbs-up"></i> Like
                    </v-btn>
                    <v-btn color="red" @click="dislikeRecipe">
                      <i class="fas fa-thumbs-down"></i> Dislike
                    </v-btn>
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
            <li>Lubin (brancin); 1 kom cca. 1,5 kg težine (ili 4 kom cca. 0,40 kg)</li>
            <li>Maslinovo ulje; 1-1,5 dcl</li>
            <li>Sol krupna; 2-3 kg</li>
            <li>Češnjak; 1 režanj</li>
            <li>Peršin; 2 grančice</li>
            <li>Limun; 1 tanak fetaš</li>
            <li>Bjelanjak od 1 jajeta</li>
            <li>Papar, po osobnom ukusu</li>
            <li>Krumpir; 1 kg</li>
            <li>Rajčice, kvasac, kapula i paprika za salatu</li>
            <li>Domaći kvasini ili aceto balsamico</li>
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
            <li>Dobar tek!</li>
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
            <li>2 komada orada</li>
            <li>2 dl bijelog vina</li>
            <li>1 manja glavica češnjaka</li>
            <li>1½ dl maslinovog ulja</li>
            <li>Sol</li>
            <li>Svježe mljeveni papar</li>
            <li>Mediteranski začin Vegeta</li>
            <li>Grančica ružmarina</li>
            <li>1 limun</li>
            <li>½ kg blitve</li>
            <li>40 dag krumpira</li>
          </ul>
        </p>
        <p>
          <strong>Priprema:</strong>
          <ol>
            <li>Češnjak očistimo i protisnemo, te ga pomiješamo sa vinom i ostavimo neka odstoji oko 2 sata, kako bi vino upilo češnjak.</li>
            <li>U drugu posudu sa uljem pomiješamo svježe mljeveni papar i mediteranske začine.</li>
            <li>Ribu očistimo, operemo i papirnatim ubrusom posušimo, uzdužno prerežemo, posolimo i namažemo pripremljenim uljem uz pomoć grančice ružmarina.</li>
            <li>Ostatak ovog ulja pomiješamo s prehodno pripremljenim vinom i češnjakom.</li>
            <li>Namazanu ribu stavimo u malo pouljenu vatrostalnu posudu i pečemo poklopljeno u zagrijanoj pećnici na 200 °C oko 50 minuta. (Ako nemate poklopac, stavite foliju).</li>
            <li>Dok se peče, ribu premažujemo mješavinom bijelog vina s češnjakom i preostalim uljem kojim smo ribu prethodno premazali.</li>
            <li>Za vrijeme dok se riba peče očistimo i operemo blitvu i krumpir. Krumpir narežemo na kockice i stavimo kuhati u posoljenu hladnu vodu. Nakon 15-tak minuta dodamo blitvu, na listiće narezan češnjak, malo maslinovog ulja i sve zajedno još kuhamo 5-7 minuta, pa procijedimo i poslužimo uz ribu.</li>
            <li>Dobar tek!</li>
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
        <h3>Pečena škarpina uz krumpir</h3>
        <p>
          <strong>Sastojci:</strong>
          <ul>
            <li>800 g škarpine</li>
            <li>150 g luka</li>
            <li>350 g paprike</li>
            <li>200 g cherry rajčica</li>
            <li>100 ml vode</li>
            <li>1 češnjak češnjaka</li>
            <li>1 žličica Vegete</li>
            <li>1 prstohvat Vegeta Maestro crnog papra mljevenog</li>
            <li>100 ml maslinovog ulja</li>
            <li>1 žlica nasjeckanog peršina</li>
            <li>Dobar tek!</li>
          </ul>
        </p>
        <p>
          <strong>Priprema:</strong>
          <ol>
            <li>Škarpinu dobro očistite, operite, posolite i stavite u prikladnu tepsiju.</li>
            <li>U posudi pomiješajte luk narezan na ploške i papriku narezanu na rezance.</li>
            <li>Male rajčice 10-15 sekundi uronite u kipuću vodu, pa ih ogulite. Prerežite ih napola i dodajte paprici.</li>
            <li>Dodajte protisnuti češnjak, Vegetu, sol, papar, maslinovo ulje, dobro promiješajte i zalijte preko ribe.</li>
            <li>Ribu stavite peći u pećnicu zagrijanu na 180°C i pecite 40 minuta povremeno zalijevajući vodom.</li>
            <li>Posluživanje: Pečenu škarpinu i povrće posipajte nasjeckanim peršinom te poslužite s kuhanom ili prženom rižom.</li>
            <li>Dobar tek!</li>
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
        <h3>Pečeni zubatac</h3>
        <p>
          <strong>Sastojci:</strong>
          <ul>
            <li>1,5 kg zubaca</li>
            <li>2 dl maslinovog ulja</li>
            <li>1 dl bijelog vina</li>
            <li>5 češnjaka bijelog luka</li>
            <li>peršin</li>
            <li>sol</li>
            <li>začini po ukusu</li>
            <li>bijelo brašno</li>
            <li>kukuruzno brašno</li>
          </ul>
        </p>
        <p>
          <strong>Priprema:</strong>
          <ol>
            <li>Ribu dobro očistiti, oprati i ocijediti. Dok se riba cijedi, pripremite marinadu. U dubljoj posudi pomiješajte maslinovo ulje i vino. Dodajte sitno nasjeckani bijeli luk i peršin.</li>
            <li> Ocijeđenu ribu dobro posolite i začinite po ukusu, te je stavite u marinadu da odstoji oko sat vremena. Povremeno ribu okrenite kako bi se ravnomjerno marinirala. Pleh za pečenje namastite uljem i dobro zagrijte u pećnici.</li>
            <li>Pomiješajte bijelo i kukuruzno brašno, pa panirajte ribu. Stavite ribu u zagrijani pleh, prelijte ostatkom marinade i pecite sat vremena na 200 °C.</li>
            <li>Dobar tek!</li>
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
    likeRecipe() {
      this.selectedFish = null;

      console.log("User liked the recipe");
    },
    dislikeRecipe() {
      this.selectedFish = null;

      console.log("User disliked the recipe");
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

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
}

.v-btn {
  color: white;
  margin-right: 10px;
}

.feedback-buttons {
  display: flex;
  align-items: center;
}

.v-btn i {
  margin-right: 5px;
}

.v-btn:first-of-type {
  background-color: #1e88e5;
}

.v-btn:first-of-type:hover {
  background-color: #1565c0;
}

.v-btn:nth-of-type(2),
.feedback-buttons > .v-btn {
  background-color: #4caf50;
}

.v-btn:nth-of-type(2):hover,
.feedback-buttons > .v-btn:hover {
  background-color: #388e3c;
}

.v-btn:last-of-type,
.feedback-buttons > .v-btn:last-of-type {
  background-color: #f44336;
}

.v-btn:last-of-type:hover,
.feedback-buttons > .v-btn:last-of-type:hover {
  background-color: #d32f2f;
}
</style>
