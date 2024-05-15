<template>
  <div class="info-container">
    <div class="top-left-bar">
      <img
        src="../assets/fish_logo.png"
        alt="Saltwater Success Logo"
        class="info-logo"
      />
      <span class="logo-text">Saltwater Success</span>
    </div>
    <h1>Iskustva korisnika</h1>
    <!-- Dodaj sadržaj o iskustvima korisnika ovdje -->
  </div>
</template>

<script>
export default {
  name: "UserExperiences",
};
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  text-align: center;
}

.top-left-bar {
  position: absolute;
  top: 1%;
  left: 0.5%;
  display: flex;
  align-items: center;
}

.info-logo {
  max-height: 60px;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
