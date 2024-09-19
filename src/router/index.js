import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import EntregasView from '@/views/EntregasView.vue';
import TrabalhoView from '@/views/TrabalhoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/entregas',
    name: 'entregas',
    component: EntregasView 
  },
  {
    path: '/trabalho/:id',
    name: 'trabalho',
    component: TrabalhoView, 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
