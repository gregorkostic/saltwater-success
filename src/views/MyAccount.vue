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
                <v-text-field
                  v-model="user.name"
                  label="First name"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="user.surname"
                  label="Last name"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="user.email"
                  label="Email"
                  outlined
                  readonly
                ></v-text-field>
                <v-btn color="primary" @click="updateProfile">Save</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>My Posts</v-card-title>
              <v-card-text>
                <div
                  v-for="(post, index) in userPosts"
                  :key="index"
                  class="liked-equipment"
                >
                  <div class="equipment-container">
                    <img
                      :src="post.image"
                      :alt="post.title"
                      class="equipment-img"
                    />
                    <p>
                      <strong>{{ post.title }}</strong>
                    </p>
                    <p>{{ post.content }}</p>
                  </div>
                  <v-btn icon @click="removeUserPost(post.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>My Equipment that I Liked</v-card-title>
              <v-card-text>
                <div
                  v-for="(equipment, index) in likedEquipment"
                  :key="index"
                  class="liked-equipment"
                >
                  <div class="equipment-container">
                    <img
                      :src="equipment.image"
                      :alt="equipment.name"
                      class="equipment-img"
                    />
                    <p>{{ equipment.name }}</p>
                  </div>
                  <v-btn icon @click="removeLikedEquipment(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="info-card">
              <v-card-title>My Recipes that I Liked</v-card-title>
              <v-card-text>
                <div
                  v-for="(recipe, index) in likedRecipes"
                  :key="index"
                  class="liked-equipment"
                >
                  <div class="equipment-container">
                    <img
                      :src="recipe.dishImage"
                      :alt="recipe.name"
                      class="equipment-img"
                    />
                    <p>{{ recipe.name }}</p>
                  </div>
                  <v-btn icon @click="removeLikedRecipe(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
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
import {
  auth,
  db,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
} from "../firebase";

export default {
  name: "MyAccount",
  components: { NavBar },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        profilePic: "",
      },
      defaultProfilePic: require("@/assets/default_profile_img.jpg"),
      userPosts: JSON.parse(localStorage.getItem("userPosts")) || [],
      likedEquipment: JSON.parse(localStorage.getItem("likedEquipment")) || [],
      likedRecipes: JSON.parse(localStorage.getItem("likedRecipes")) || [],
      newPassword: "",
      confirmPassword: "",
      showPassword: false,
      confirmDelete: false,
      currentPassword: "",
    };
  },
  created() {
    this.loadUserProfile();
  },
  methods: {
    async loadUserProfile() {
      const user = auth.currentUser;
      if (user) {
        this.user.email = user.email;
        const userDoc = await getDoc(doc(db, "Users", user.email));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          this.user.name = userData.Name;
          this.user.surname = userData.Surname;
        }
      }
    },
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
      this.user.profilePic = "";
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async updateProfile() {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.email), {
          Name: this.user.name,
          Surname: this.user.surname,
          Email: this.user.email,
        });
        alert("Profile updated successfully!");
      }
    },
    async updatePassword() {
      if (this.newPassword !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const user = auth.currentUser;
        if (user) {
          const credential = EmailAuthProvider.credential(
            user.email,
            this.currentPassword
          );
          await reauthenticateWithCredential(user, credential);
          await updatePassword(user, this.newPassword);
          alert("Password updated successfully!");
        }
      } catch (error) {
        alert("Error updating password: " + error.message);
      }
    },
    async deleteAccount() {
      try {
        const user = auth.currentUser;
        if (user) {
          await deleteDoc(doc(db, "Users", user.email));
          await user.delete();
          alert("Account deleted successfully!");
          this.$router.push("/signup");
        }
      } catch (error) {
        alert("Error deleting account: " + error.message);
      }
    },
    removeLikedEquipment(index) {
      this.likedEquipment.splice(index, 1);
      localStorage.setItem(
        "likedEquipment",
        JSON.stringify(this.likedEquipment)
      );
    },
    removeLikedRecipe(index) {
      this.likedRecipes.splice(index, 1);
      localStorage.setItem("likedRecipes", JSON.stringify(this.likedRecipes));
    },
    removeUserPost(postId) {
      this.userPosts = this.userPosts.filter((post) => post.id !== postId);
      localStorage.setItem("userPosts", JSON.stringify(this.userPosts));
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

.liked-equipment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.equipment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.equipment-img {
  width: 100px;
  height: auto;
  margin-bottom: 5px;
  border-radius: 5px;
}

.v-card-text p {
  text-align: left;
}

.v-btn,
.v-checkbox {
  margin-left: 0;
}
</style>
