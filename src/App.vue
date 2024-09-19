<template>
  <TheNavBar />
  <router-link to="/login"></router-link>
  <router-link to="/"></router-link>
  <router-view />
</template>

<script>
import TheNavBar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    TheNavBar,
  },
  mounted() {
    this.$router.push('/login');
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>