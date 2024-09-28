import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import EntregasView from '@/views/EntregasView.vue';
import TrabalhoView from '@/views/TrabalhoView.vue';
import AvaliacaoView from '@/views/AvaliacaoView.vue';
import AvaliacaoDetailView from '@/views/AvaliacaoDetailView.vue';

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
  },
  {
    path: '/avaliacao',
    name: 'avaliacao',
    component: AvaliacaoView, 
  },
  {
    path: '/avaliacao/:id',
    name: 'avaliacaodetail',
    component: AvaliacaoDetailView, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
