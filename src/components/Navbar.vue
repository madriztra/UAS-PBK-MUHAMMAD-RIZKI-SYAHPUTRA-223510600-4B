<template>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
  
        <q-toolbar-title>
          My Awesome Website
        </q-toolbar-title>
  
        <q-space />
  
        <q-btn
          v-for="item in menuItems"
          :key="item.name"
          v-ripple
          :label="item.label"
          @click="navigateTo(item.route)"
        />
      </q-toolbar>
    </q-header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        leftDrawerOpen: false,
        menuItems: [
          { name: 'home', label: 'Home', route: '/' },
          { name: 'task1', label: 'Task 1', route: '/task1' },
          { name: 'task2', label: 'Task 2', route: '/task2' }
          // tambahkan item menu untuk halaman lain di sini
        ]
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya CSS sesuai kebutuhan */
  </style>
  