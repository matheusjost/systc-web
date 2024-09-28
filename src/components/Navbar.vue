<template>
  <nav v-if="!isLoginPage" class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">SYSTC</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">SYSTC</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cadastros
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Cadastrar aluno</a></li>
                <li><a class="dropdown-item" href="#">Cadastrar professor</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link v-show="hasPermission()" class="nav-link" to="/">Cadastrar usuário</router-link>
            </li>
            <li class="nav-item">
              <router-link v-show="hasPermission('CADASTRAR')" class="nav-link" to="/">Cadastrar trabalho</router-link>
            </li>
            <li class="nav-item">
              <router-link v-show="hasPermission()" class="nav-link" to="/entregas">Editar trabalho</router-link>
            </li>
            <li class="nav-item">
              <router-link v-show="hasPermission('AVALIAR')" class="nav-link" to="/avaliacao">Avaliar trabalho</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Registrar reunião</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
    name: "TheNavbar",
    data() {
        return {
            menu: null,
        }
    },
    computed: {
      isLoginPage() {
        const isLoginPage = this.$route.name == 'login';
        if (!isLoginPage)
          this.getMenu();

        return isLoginPage;
      }
    },
    methods: {
      async getMenu() {
        try { 
            const response = await apiClient.get('/usuario/menu');
            this.menu = response.data;
        } catch(err) {
            return
        }
      },
      hasPermission(item) {
        var role = localStorage.getItem('role');
        if (role === 'COORDENADOR')
          return true;

        if (item === 'AVALIAR' && role === 'PROFESSOR')
          return true;

        if (item === 'CADASTRAR' && role === 'ALUNO')
          return true;

        return false;
      }
    }
};
</script>
<style>

</style>