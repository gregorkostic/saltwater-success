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
        <h1>Feel The Bite</h1>
        <p>Be among the first to become a professional fisherman</p>
        <v-btn color="blue" dark>Join Now</v-btn>
      </div>
      <img
        src="../assets/fish_character.png"
        alt="Fish Character"
        class="fish-image"
      />
    </div>
  </v-app>
</template>

<style scoped>
.background {
  background-image: url(../assets/background.jpg) !important;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  text-align: center;
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
  max-width: 400px;
}

.fish-image {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  max-width: 400px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.v-btn {
  background-color: #007bff; /* Slightly darker shade of blue */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds subtle shadow */
}
</style>
