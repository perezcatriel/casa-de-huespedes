<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-text">
      <h2>Bienvenidos a <i>Casa de Huéspedes</i></h2>
      <p>Tu paraíso en Jericoacoara</p>
      <a href="#accommodations" class="button">Descubre Más</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "CxHero",
};
</script>

<style scoped>
.hero {
  position: relative;
  background-image: url("@/assets/photos/jericoacoara.jpg");
  background-size: cover;
  background-position: center;
  height: 80vh;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* Fondo negro translúcido */
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 3px 3px 3px black;
}
.button {
  background-color: #00a8ff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  text-shadow: 0 0;
}
</style>
