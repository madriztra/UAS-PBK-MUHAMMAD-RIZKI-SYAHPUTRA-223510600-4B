<template>
    <div class="widget-weather">
      <h2>Weather Widget</h2>
      <div v-if="weather">
        <p>{{ weather.name }}</p>
        <p>{{ weather.weather[0].description }}</p>
        <p>{{ weather.main.temp }}°C</p>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        weather: null
      };
    },
    mounted() {
      this.fetchWeather();
    },
    methods: {
      async fetchWeather() {
        const apiKey = '7c264d2ec1d940e9829225ad11ffaca4';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pekanbaru&appid=${apiKey}&units=metric`;
        
        try {
          const response = await axios.get(apiUrl);
          this.weather = response.data;
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .widget-weather {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  