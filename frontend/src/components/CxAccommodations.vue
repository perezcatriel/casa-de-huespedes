<template>
    <section id="accommodations" class="accommodations">
      <h2>Nuestros Alojamientos</h2>
      <div class="cards">
        <div class="card" v-for="accommodation in accommodations" :key="accommodation.id">
          <img :src="accommodation.image" :alt="accommodation.title">
          <div class="card-content">
            <h3>{{ accommodation.title }}</h3>
            <p>{{ accommodation.description }}</p>
            <a :href="accommodation.link" class="button">Reservar en Airbnb</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import casa1 from '@/assets/casa1.jpeg'
  import casa2 from '@/assets/casa2.jpeg'
  import casa3 from '@/assets/casa5.jpeg'

  export default {
    name: 'CxAccommodations',
    data() {
      return {
        accommodations: [
          {
            id: 1,
            title: 'Casa Entera',
            description: 'Espacio perfecto para toda la familia.',
            image: casa1,
            link: 'https://www.airbnb.com/h/casadehuespedesjeri'
          },
          {
            id: 2,
            title: 'Suite con Aire Acondicionado',
            description: 'Confort y elegancia en un entorno tranquilo.',
            image: casa2,
            link: 'https://www.airbnb.com/h/casadehuespedesjeri1'
          },
          {
            id: 3,
            title: 'Suite con Aire Acondicionado y Desayuno incluido',
            description: 'Maxima comodidas y disfrute.',
            image: casa3,
            link: 'https://www.airbnb.com/h/casadehuespedesjeri2'
          }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .accommodations {
    padding: 40px 20px;
  }
  .cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .card {
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 300px;
    text-align: center;
  }
  .card img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .card-content {
    padding: 20px;
  }
  .button {
    background-color: #00a8ff;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-top: 10px;
  }
  </style>
  