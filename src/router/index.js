import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import EntregasView from '@/views/EntregasView.vue';
import TrabalhoDetailView from '@/views/TrabalhoDetailView.vue';
import AvaliacaoView from '@/views/AvaliacaoView.vue';
import AvaliacaoDetailView from '@/views/AvaliacaoDetailView.vue';
import CriarReuniaoView from '@/views/CriarReuniaoView.vue';
import ReuniaoView from '@/views/ReuniaoView.vue';
import ReuniaoDetailView from '@/views/ReuniaoDetailView.vue';
import UsuarioView from '@/views/UsuarioView.vue';
import CriarUsuarioView from '@/views/CriarUsuarioView.vue';
import UsuarioDetailView from '@/views/UsuarioDetailView.vue';
import CriarTrabalhoView from '@/views/CriarTrabalhoView.vue';
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
    name: 'trabalhodetail',
    component: TrabalhoDetailView, 
  },
  {
    path: '/trabalhos',
    name: 'trabalhos',
    component: TrabalhoView, 
  },
  {
    path: '/criar_trabalho',
    name: 'criartrabalho',
    component: CriarTrabalhoView,
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
  {
    path: '/trabalho/:id/reuniao',
    name: 'reuniao',
    component: ReuniaoView,
  },
  {
    path: '/trabalho/:id/criar_reuniao',
    name: 'criarreuniao',
    component: CriarReuniaoView,
  },
  {
    path: '/trabalho/:id/reuniao/:idreuniao',
    name: 'reuniaodetail',
    component: ReuniaoDetailView,
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UsuarioView, 
  },
  {
    path: '/criar_usuario',
    name: 'criarusuario',
    component: CriarUsuarioView,
  },
  {
    path: '/usuario/:id',
    name: 'usuariosdetail',
    component: UsuarioDetailView, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
