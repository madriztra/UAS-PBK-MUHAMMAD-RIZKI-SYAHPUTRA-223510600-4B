<template>
    <EssentialLink/>
    <div class="home-page">
      <h1>Welcome to My Weather App</h1>
      
      <!-- Widget Weather Component -->
      <WidgetWeather />
    </div>
  </template>
  
  <script>
  import EssentialLink from 'src/components/EssentialLink.vue';
  import WidgetWeather from '../components/WidgetWeather.vue';

  
  export default {
    components: {
    WidgetWeather,
    EssentialLink
},
    // Other component options
  };
  </script>
  
  <style scoped>
  .home-page {
    padding: 20px;
  }
  </style>
  