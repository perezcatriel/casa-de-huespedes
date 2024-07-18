<template>
    <div class="download-container">
      <h2>Guía de Viaje a Jericoacoara - ¡Gratis!</h2>
      <img src="../assets/photos/guiaviagem.jpeg" alt="Portada de la Guía de Viaje a Jericoacoara" class="cover-image" />
      <p>Descarga nuestra completa guía de viaje a Jericoacoara y descubre todos los secretos de este paraíso. Incluye recomendaciones de lugares para visitar, actividades, restaurantes, y más.</p>
      <button @click="downloadPDF">Descargar Guía Gratis</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DownloadPDF',
    methods: {
      downloadPDF() {
        const link = document.createElement('a');
        link.href = '../assets/pdf/Presentación planificación guía informativa de viaje con bonitas fotografías fondo claro.pdf'; // Reemplaza con la URL de tu PDF
        link.download = 'Guia_de_Viaje_Jericoacoara.pdf'; // Nombre con el que se descargará el archivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  </script>
  
  <style scoped>
  .download-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: #fff;
  }
  
  .download-container h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .cover-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  
  .download-container p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #666;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  