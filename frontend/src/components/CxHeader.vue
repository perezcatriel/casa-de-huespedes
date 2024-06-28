<template>
  <header>
    <div class="header-container">
      <img src="@/assets/logo.jpeg" alt="Casa de Huéspedes Logo" class="logo" />
      <h1>Casa de Huéspedes</h1>
      <img
        src="@/assets/icons/menu.svg"
        alt="menu"
        @click="toggleMenu"
        class="menu"
      />
    </div>
    <nav>
      <ul v-show="isMenuOpen" class="header__link">
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#accommodations">Alquiler</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "CxHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
h1 {
  font-size: 1.2rem;
}
nav {
  background-color: #006266;
  padding: 10px 0;
}
nav ul {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  list-style: none;
  width: 80vw;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>
