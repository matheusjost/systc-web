<template>
    <nav class="navbar">
      <div class="menu-icon" @click="toggleMenu()">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>SYSTC</h1>
      <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
      </div>
    </nav>
</template>

<script>
export default {
    name: "TheNavbar",
    methods: {
      toggleMenu() {
        document.querySelector('.navbar').classList.toggle('active');
      }
    }
};
</script>
<style>

.navbar {
    background-color: #999999;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1000;
}

.navbar h1 {
    font-size: 24px;
    margin-right: 10px;
}

.menu-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    margin-left: 10px;
}

.menu-icon div {
    height: 4px;
    background-color: white;
    border-radius: 2px;
    width: 32px;
}

.nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    width: 20%;
    height: 95vh;
    background-color: #333333;
    padding: 10px 0;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-links a:hover {
    background-color: #444444;
}

/* Exibir o menu quando ativo */
.navbar.active .nav-links {
    display: flex;
}

.navbar.active {
    transform: translateX(0); /* Faz a navbar aparecer ao ser ativada */
}

</style>