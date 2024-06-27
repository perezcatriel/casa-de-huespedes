<template>
  <div class="contact">
    <a href="https://www.airbnb.com/h/casadehuespedesjeri" target="_blank"><img src="@/assets/airbnb.svg" alt="airbnb" /></a>
    <a href="https://www.instagram.com/casa_de_huespedes_jeri?igsh=dXl1ZjNwaXk2eDFp" target="_blank"><img src="../assets/instagram.svg" alt="instagram" /></a>
    <a href="https://wa.me/5493541638060" target="_blank"><img src="../assets/whatsapp.svg" alt="cell phone" /></a>
    <a href="mailto:casadehuespedes.jeri@gmail.com"
       target="_blank"><img
        src="../assets/mensagem.png"
        alt="email"
        style="width: 50px; height: 50px"
    /></a>
  </div>
</template>

<script>
export default {
  name: "CxContact",
};
</script>

<style scoped>
.contact {
    display: flex;
    justify-content: space-around;
    background-color: antiquewhite;
    padding: 80px 0;
}
</style>
