<template>
  <footer class="footer">
    <p>&copy; 2024 Casa de Huéspedes. Todos los derechos reservados.</p>
    <p>By <a href="https://datacraft.vercel.app" target="_blank">DataCraft</a></p>
  </footer>
</template>

<script>
export default {
  name: "CxFooter",
};
</script>

<style scoped>
.footer {
  background-color: #006266;
  color: white;
  padding: 20px;
  text-align: center;
}
.social-media {
  margin-top: 10px;
}
.social-link {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
a {
  color: #00a8ff;
  font-weight: bold;
  text-shadow: 2px 2px 3px black;
  text-decoration: none;
}
</style>
