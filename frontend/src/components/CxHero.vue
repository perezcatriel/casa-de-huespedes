<template>
  <section class="hero">
    <video autoplay muted loop class="video-bg">
      <source src="@/assets/videos/casa-video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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
  height: 80vh;
}
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Asegura que el video esté detrás del contenido de texto */
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
  text-shadow: 2px 2px 1px black;
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
