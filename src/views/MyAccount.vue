<template>
  <v-app>
    <NavBar />
    <div class="background">
      <v-container fluid class="content-container">
        <v-row justify="center">
          <v-col cols="12" class="heading">
            <h2>Moj Račun</h2>
            <p class="info-text">Upravljajte svojim korisničkim računom.</p>
          </v-col>
          <v-col cols="12" md="8">
            <div class="profile-area">
              <v-avatar class="profile-avatar">
                <img
                  :src="user.profilePic || defaultProfilePic"
                  alt="profile"
                />
              </v-avatar>
              <v-btn small color="primary" @click="triggerFileInput">
                Change Picture
              </v-btn>
              <v-btn
                small
                color="secondary"
                @click="removeProfilePic"
                v-if="user.profilePic"
              >
                Remove Picture
              </v-btn>
              <input
                type="file"
                @change="uploadProfilePic"
                hidden
                ref="fileInput"
              />
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>Basic Information</v-card-title>
              <v-card-text>
                <p><strong>First name:</strong> {{ user.name }}</p>
                <p><strong>Last name:</strong> {{ user.surname }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>My Posts</v-card-title>
              <v-card-text>
                <p v-for="post in userPosts" :key="post.id">{{ post.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>My Equipment that I Liked</v-card-title>
              <v-card-text>
                <p v-for="equipment in likedEquipment" :key="equipment.id">
                  {{ equipment.name }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>My Recipes that I Liked</v-card-title>
              <v-card-text>
                <p v-for="recipe in likedRecipes" :key="recipe.id">
                  {{ recipe.name }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>Changing the password</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="newPassword"
                  :type="showPassword ? 'text' : 'password'"
                  label="Enter new password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="togglePasswordVisibility"
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  :type="showPassword ? 'text' : 'password'"
                  label="Confirm new password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="togglePasswordVisibility"
                ></v-text-field>
                <v-btn color="primary" @click="updatePassword">Update</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>Deleting the account</v-card-title>
              <v-card-text>
                <v-checkbox
                  v-model="confirmDelete"
                  label="Confirm that I want to delete my account"
                ></v-checkbox>
                <v-btn
                  color="primary"
                  @click="deleteAccount"
                  :disabled="!confirmDelete"
                >
                  Delete Account
                </v-btn>
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
  name: "MyAccount",
  components: { NavBar },
  data() {
    return {
      user: {
        name: null,
        surname: null,
        email: null,
        profilePic: null,
      },
      defaultProfilePic: require("@/assets/default_profile_img.jpg"),
      userPosts: [{ id: 1, title: null, content: null }],
      likedEquipment: [{ id: 1, name: null }],
      likedRecipes: [{ id: 1, name: null }],
      newPassword: "",
      confirmPassword: "",
      showPassword: false,
      confirmDelete: false,
    };
  },
  methods: {
    uploadProfilePic(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.profilePic = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    removeProfilePic() {
      this.user.profilePic = null;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    updatePassword() {
      alert("Password updated successfully!");
    },
    deleteAccount() {
      alert("Account deleted successfully!");
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/background.jpg") !important;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.content-container {
  overflow: auto;
  max-height: calc(100vh - 100px);
}

.heading,
.info-text {
  text-align: center;
  color: white;
}

.profile-area {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.profile-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 3px solid white;
}

.v-btn {
  margin-top: 20px;
}

.info-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
}

.v-card-text p {
  text-align: left;
}

.v-btn,
.v-checkbox {
  margin-left: 0;
}
</style>
