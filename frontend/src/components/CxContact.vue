<template>
  <section id="contact" class="contact">
    <h2>Contáctanos</h2>
    <p>
      Para más información o reservas, contáctanos a través de WhatsApp o
      Airbnb. Estamos aquí para ayudarte.
    </p>

    <div class="contact-options">
      <a href="https://wa.me/5493541638060" target="_blank"
        ><img src="../assets/whatsapp.svg" alt="cell phone"
      /></a>
      <a href="https://www.airbnb.com/h/casadehuespedesjeri" target="_blank"
        ><img src="@/assets/airbnb.svg" alt="airbnb"
      /></a>
      <a
        href="https://www.instagram.com/casa_de_huespedes_jeri?igsh=dXl1ZjNwaXk2eDFp"
        target="_blank"
        ><img src="../assets/instagram.svg" alt="instagram"
      /></a>
      <a href="mailto:casadehuespedes.jeri@gmail.com" target="_blank"
        ><img
          src="../assets/mensagem.png"
          alt="email"
          style="width: 50px; height: 50px"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "CxContact",
};
</script>

<style scoped>
.contact {
  padding: 40px 20px;
  text-align: center;
}

.contact {
  padding: 40px 20px;
  text-align: center;
}
.contact-options {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.button {
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
}
</style>
