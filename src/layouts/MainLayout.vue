<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />

    <q-drawer show-if-above v-model="leftDrawerOpen" :content-class="drawerClass">
      <!-- Drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page>
        <div class="home-page">
          <h1>Welcome to My Awesome Website</h1>
          
          <!-- Widget Weather Component -->
          <WidgetWeather />
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies
            magna in dolor dignissim, a molestie purus cursus. Vestibulum quis
            fermentum libero, vel egestas urna. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec non
            rhoncus eros. Cras ultricies enim ut suscipit vestibulum. Proin in
            sollicitudin neque. Nunc eu urna sit amet risus semper venenatis. Etiam
            nec nisi vel sapien tincidunt scelerisque. Aliquam sed massa id ante
            imperdiet suscipit. Pellentesque at congue nunc. Quisque nec mauris sit
            amet felis consectetur gravida. Donec interdum, odio sit amet blandit
            varius, augue orci volutpat urna, a faucibus est lectus at nisi.
          </p>
        </div>
      </q-page>
    </q-page-container>

    <q-footer elevated>
      <!-- Footer content -->
    </q-footer>
  </q-layout>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import WidgetWeather from '../components/WidgetWeather.vue';

export default {
  components: {
    Navbar,
    WidgetWeather
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    drawerClass() {
      return 'bg-grey-2';
    }
  }
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}
</style>
