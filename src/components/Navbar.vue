<template>
  <nav v-if="!isLoginPage" class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">SYSTC</router-link>
      <h1 class="navbar-brand">{{ login }}</h1>
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
            <li class="nav-item">
              <router-link v-show="hasPermission()" class="nav-link" to="/usuarios">Usuários</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/trabalhos">Trabalhos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "TheNavbar",
    data() {
        return {
            menu: {},
            login: '',
        }
    },
    computed: {
      isLoginPage() {
        const isLoginPage = this.$route.name == 'login';

        return isLoginPage;
      }
    },
    methods: {
        hasPermission(item) {
            var role = localStorage.getItem('role');
            if (role === 'COORDENADOR')
            return true;

            if (item === 'AVALIAR' && role === 'PROFESSOR')
            return true;

            if (item === 'CADASTRAR' && role === 'ALUNO')
            return true;

            return false;
        },
        setLabelLogin() {
            this.login = localStorage.getItem('login');
            this.login = '';
        }
    },
    mounted() {
        this.setLabelLogin();
    }
};
</script>
<style>

</style>