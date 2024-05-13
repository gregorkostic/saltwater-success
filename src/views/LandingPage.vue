<template>
  <hello-world />
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.landing-page {
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Podešavanje visine da popuni cijeli ekran */
  width: 100%;
}
</style>
