<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SYSTC</a>
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
              <a class="nav-link" href="#">Definir cronograma de entregas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Definir banca</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Avaliar trabalho</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Criar reunião</a>
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
            menu: null
        }
    },
    methods: {
      async getMenu() {
        try { 
            const response = await apiClient.get('/menu');
            this.menu = response.data;
        } catch(err) {
            return
        }
    }
    }
};
</script>
<style>

</style>