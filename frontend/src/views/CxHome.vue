<template>
    <div>
      <CxHeader />
      <CxHero />
      <CxAbout />
      <CxAccommodations />
      <CxGallery />
      <CxContact />
      <CxFooter />
    </div>
  </template>
  
  <script>
  import CxHeader from '@/components/CxHeader.vue';
  import CxHero from '@/components/CxHero.vue';
  import CxAbout from '@/components/CxAbout.vue';
  import CxAccommodations from '@/components/CxAccommodations.vue';
  import CxGallery from '@/components/CxGallery.vue';
  import CxContact from '@/components/CxContact.vue';
  import CxFooter from '@/components/CxFooter.vue';
  
  export default {
    name: 'CxHome',
    components: {
      CxHeader,
      CxHero,
      CxAbout,
      CxAccommodations,
      CxGallery,
      CxContact,
      CxFooter
    }
  }
  </script>
  