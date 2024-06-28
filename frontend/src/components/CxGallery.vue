<template>
    <section id="gallery" class="gallery">
      <h2>Galería</h2>
      <div class="images">
        <img v-for="image in images" :src="image.src" :alt="image.alt" :key="image.alt">
      </div>
    </section>
  </template>
  
  <script>
  import casa1 from '@/assets/casa1.jpeg'
  import casa2 from '@/assets/casa2.jpeg'
  import casa3 from '@/assets/casa3.jpeg'
  import casa4 from '@/assets/casa4.jpeg'
  import casa5 from '@/assets/casa5.jpeg'
  import casa6 from '@/assets/casa6.jpeg'
  import casa7 from '@/assets/casa7.jpeg'
  import casa8 from '@/assets/casa8.jpeg'
  import casa9 from '@/assets/casa9.jpeg'
  import casa10 from '@/assets/casa10.jpeg'
  import casa11 from '@/assets/casa11.jpeg'


  export default {
    name: 'CxGallery',
    data() {
      return {
        images: [
          { src: casa1, alt: 'Imagen 1' },
          { src: casa2, alt: 'Imagen 2' },
          { src: casa3, alt: 'Imagen 3' },
          { src: casa4, alt: 'Imagen 4' },
          { src: casa5, alt: 'Imagen 5' },
          { src: casa6, alt: 'Imagen 6' },
          { src: casa7, alt: 'Imagen 7' },
          { src: casa8, alt: 'Imagen 8' },
          { src: casa9, alt: 'Imagen 9' },
          { src: casa10, alt: 'Imagen 10' },
          { src: casa11, alt: 'Imagen 11' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
  }
  .gallery {
    padding: 40px 20px;
    background-color: #f5f5f5;
  }
  .images {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 80vw;
  }
  .images img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  </style>
  