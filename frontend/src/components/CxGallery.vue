<template>
    <section id="gallery" class="gallery">
      <h2>Galería</h2>
      <div class="images">
        <img v-for="image in images" :src="image.src" :alt="image.alt" :key="image.alt">
      </div>
    </section>
  </template>
  
  <script>
  import casa1 from '@/assets/photos/burro.jpeg'
  import casa2 from '@/assets/photos/hab11.jpeg'
  import casa3 from '@/assets/photos/hab22.jpeg'
  import casa4 from '@/assets/photos/baño1.jpeg'
  import casa5 from '@/assets/photos/baño2.jpeg'
  import casa6 from '@/assets/photos/baño3.jpeg'
  import casa7 from '@/assets/photos/hab2.jpeg'
  import casa8 from '@/assets/photos/hab3.jpeg'
  import casa9 from '@/assets/photos/hab4.jpeg'
  import casa10 from '@/assets/photos/hab1.jpeg'
  import casa11 from '@/assets/photos/bano1.jpeg'
  import casa12 from '@/assets/photos/bano2.jpeg'
  import casa13 from '@/assets/photos/cocina1.jpeg'
  import casa14 from '@/assets/photos/cocina3.jpeg'
  import casa15 from '@/assets/photos/cocina2.jpeg'
  import casa16 from '@/assets/photos/patio1.jpeg'
  import casa17 from '@/assets/photos/patio2.jpeg'
  import casa18 from '@/assets/photos/patio3.jpeg'
  import casa19 from '@/assets/photos/patio4.jpeg'
  import casa20 from '@/assets/photos/terraza1.jpeg'
  import casa21 from '@/assets/photos/terraza2.jpeg'
  import casa22 from '@/assets/photos/terraza3.jpeg'
  import casa23 from '@/assets/photos/terraza4.jpeg'
  import casa24 from '@/assets/photos/terraza5.jpeg'
  import casa25 from '@/assets/photos/terraza6.jpeg'
  import casa26 from '@/assets/photos/terraza7.jpeg'






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
          { src: casa11, alt: 'Imagen 11' },
          { src: casa12, alt: 'Imagen 11' },
          { src: casa13, alt: 'Imagen 11' },
          { src: casa14, alt: 'Imagen 11' },
          { src: casa15, alt: 'Imagen 11' },
          { src: casa16, alt: 'Imagen 11' },
          { src: casa17, alt: 'Imagen 11' },
          { src: casa18, alt: 'Imagen 11' },
          { src: casa19, alt: 'Imagen 11' },
          { src: casa20, alt: 'Imagen 11' },
          { src: casa21, alt: 'Imagen 11' },
          { src: casa22, alt: 'Imagen 11' },
          { src: casa23, alt: 'Imagen 11' },
          { src: casa24, alt: 'Imagen 11' },
          { src: casa25, alt: 'Imagen 11' },
          { src: casa26, alt: 'Imagen 11' },
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
  