<template>
  <v-app>
    <NavBar />
    <div class="background">
      <v-container fluid class="content-container">
        <v-row justify="center">
          <v-col cols="12" class="heading">
            <h2>Iskustva korisnika</h2>
            <p class="info-text">Podijelite svoja iskustva.</p>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="new-post-card">
              <v-card-title class="headline">Novi Post</v-card-title>
              <v-card-text>
                <v-text-field
                  label="Naslov"
                  v-model="newPost.title"
                  outlined
                  :rules="[(v) => !!v || 'Naslov je obavezan']"
                  required
                ></v-text-field>
                <v-textarea
                  label="Vaše iskustvo"
                  v-model="newPost.content"
                  outlined
                  rows="4"
                  :rules="[(v) => !!v || 'Vaše iskustvo je obavezno']"
                  required
                ></v-textarea>
                <v-file-input
                  label="Dodajte sliku"
                  v-model="newPost.image"
                  accept="image/*"
                  outlined
                ></v-file-input>
                <v-btn
                  color="primary"
                  @click="createPost"
                  :disabled="!isFormValid"
                >
                  Objavi
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8" v-for="post in posts" :key="post.id">
            <v-card class="post-card">
              <v-card-title>
                {{ post.title }}
                <v-btn icon @click="deletePost(post.id)" class="delete-btn">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <div class="post-content">
                  <p>{{ post.content }}</p>
                  <v-img
                    v-if="post.image"
                    :src="post.image"
                    class="post-img"
                  ></v-img>
                </div>
                <div class="actions">
                  <v-btn
                    color="blue"
                    @click="toggleLike(post)"
                    :disabled="post.userReaction === 'like'"
                  >
                    <i class="fas fa-thumbs-up"></i> Like ({{ post.likes }})
                  </v-btn>
                  <v-btn
                    color="red"
                    @click="toggleDislike(post)"
                    :disabled="post.userReaction === 'dislike'"
                  >
                    <i class="fas fa-thumbs-down"></i> Dislike ({{
                      post.dislikes
                    }})
                  </v-btn>
                </div>
                <v-divider class="divider"></v-divider>
                <div class="comments">
                  <h4>Komentari</h4>
                  <div
                    v-for="comment in post.comments"
                    :key="comment.id"
                    class="comment"
                  >
                    <p>
                      <strong>{{ comment.author }}:</strong>
                      {{ comment.content }}
                    </p>
                  </div>
                  <v-text-field
                    label="Dodajte komentar"
                    v-model="newComment.content"
                    outlined
                  ></v-text-field>
                  <v-btn color="primary" @click="addComment(post)">
                    Komentiraj
                  </v-btn>
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
import { v4 as uuidv4 } from "uuid";
import {
  auth,
  db,
  storage,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  getDoc,
  setDoc,
  uploadBytes,
  getDownloadURL,
  ref,
} from "@/firebase";

export default {
  name: "UserExperiences",
  components: { NavBar },
  data() {
    return {
      newPost: { title: "", content: "", image: null },
      newComment: { content: "" },
      posts: [],
    };
  },
  computed: {
    isFormValid() {
      return this.newPost.title && this.newPost.content;
    },
  },
  created() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      try {
        const q = query(collection(db, "posts"));
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          let postData = doc.data();
          postData.id = doc.id;
          posts.push(postData);
        });
        this.posts = posts;
      } catch (error) {
        console.error("Error loading posts: ", error);
      }
    },
    async createPost() {
      if (this.isFormValid) {
        try {
          const user = auth.currentUser;
          let imageURL = null;
          if (this.newPost.image) {
            const storageRef = ref(storage, `posts/${this.newPost.image.name}`);
            await uploadBytes(storageRef, this.newPost.image);
            imageURL = await getDownloadURL(storageRef);
          }
          const newPost = {
            title: this.newPost.title,
            content: this.newPost.content,
            image: imageURL,
            likes: 0,
            dislikes: 0,
            userReaction: null,
            comments: [],
            userId: user.uid,
            userEmail: user.email,
          };
          const docRef = await addDoc(collection(db, "posts"), newPost);
          newPost.id = docRef.id;
          this.posts.push(newPost);
          this.resetNewPost();
        } catch (error) {
          console.error("Error creating post: ", error);
        }
      }
    },
    resetNewPost() {
      this.newPost.title = "";
      this.newPost.content = "";
      this.newPost.image = null;
    },
    toggleLike(post) {
      if (post.userReaction === "dislike") {
        post.dislikes--;
      }
      if (post.userReaction !== "like") {
        post.likes++;
        post.userReaction = "like";
      } else {
        post.likes--;
        post.userReaction = null;
      }
      this.updatePost(post);
    },
    toggleDislike(post) {
      if (post.userReaction === "like") {
        post.likes--;
      }
      if (post.userReaction !== "dislike") {
        post.dislikes++;
        post.userReaction = "dislike";
      } else {
        post.dislikes--;
        post.userReaction = null;
      }
      this.updatePost(post);
    },
    async updatePost(post) {
      try {
        await setDoc(doc(db, "posts", post.id), post, { merge: true });
      } catch (error) {
        console.error("Error updating post: ", error);
      }
    },
    async deletePost(postId) {
      try {
        const postDoc = await getDoc(doc(db, "posts", postId));
        if (
          postDoc.exists() &&
          postDoc.data().userId === auth.currentUser.uid
        ) {
          await deleteDoc(doc(db, "posts", postId));
          this.posts = this.posts.filter((post) => post.id !== postId);
          alert("Post deleted successfully!");
        } else {
          alert("You do not have permission to delete this post.");
        }
      } catch (error) {
        console.error("Error deleting post: ", error);
      }
    },
    addComment(post) {
      if (this.newComment.content.trim()) {
        const newComment = {
          id: uuidv4(),
          author: "Korisnik",
          content: this.newComment.content,
        };
        post.comments.push(newComment);
        this.newComment.content = "";
        this.updatePost(post);
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

.new-post-card,
.post-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.post-content,
.actions,
.comments {
  margin-top: 10px;
}

.post-img {
  width: 100%;
  border-radius: 10px;
}

.delete-btn {
  float: right;
}

.divider {
  margin: 20px 0;
}
</style>
