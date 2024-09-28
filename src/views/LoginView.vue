<template>
  <div class="login-wrapper">
    <div class="logo-text">SYSTC</div>
    <div class="login-container">
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Nome de usuário</label>
          <input v-model="username" type="text" id="username" placeholder="Username" required>
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input v-model="password" type="password" id="password" placeholder="Password" required>
        </div>
        <div class="forgot-password">
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div class="signup">
        <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/auth', {
          login: this.username,
          senha: this.password,
        });
        if (response.status == 401)
          throw "";

        const token = response.data.data.token;
        const role = response.data.data.role;
        localStorage.setItem('authToken', token);
        localStorage.setItem('role', role);
        this.$router.push('/');
      } catch (err) {
        this.error = 'Login failed. Please try again.';
      }
    }
  },
};
</script>

<style scoped>
.login-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #444
}

.logo-text {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 70px;
}

.login-container {
  width: 350px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.login-container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.login-container .input-group {
    margin-bottom: 20px;
    position: relative;
}

.login-container label {
    font-size: 14px;
    color: #666;
    display: block;
    margin-bottom: 5px;
}

.login-container input[type="text"],
.login-container input[type="password"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.login-container input[type="text"]:focus,
.login-container input[type="password"]:focus {
    border-color: #6A82FB;
    outline: none;
}

.login-container .forgot-password {
    text-align: right;
    font-size: 12px;
    margin-bottom: 20px;
}

.login-container .forgot-password a {
    text-decoration: none;
    color: #FC5C7D;
    transition: color 0.3s;
}

.login-container .forgot-password a:hover {
    color: #6A82FB;
}

.login-container button {
    width: 100%;
    padding: 12px;
    background-color: #444444;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-container button:hover {
    background-color: #FC5C7D;
}

.login-container .signup {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
}

.login-container .signup a {
    text-decoration: none;
    color: #444444;
    font-weight: bold;
    transition: color 0.3s;
}

.login-container .signup a:hover {
    color: #FC5C7D;
}
</style>