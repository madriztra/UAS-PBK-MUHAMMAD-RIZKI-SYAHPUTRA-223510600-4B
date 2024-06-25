import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Task1Page from '../views/Task1Page.vue'; // Ganti dengan nama halaman yang sesuai
import Task2Page from '../views/Task2Page.vue'; // Ganti dengan nama halaman yang sesuai

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task1',
    name: 'Task1',
    component: Task1Page
  },
  {
    path: '/task2',
    name: 'Task2',
    component: Task2Page
  },
  // Tambahkan rute untuk task lainnya di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
