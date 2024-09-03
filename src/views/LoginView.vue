<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <div v-if="error">{{ error }}</div>
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
        const response = await apiClient.post('/login', {
          username: this.username,
          password: this.password,
        });
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = 'Login failed. Please try again.';
      }
    },
  },
};
</script>