<template>
  <router-link to="/login"></router-link>
  <router-link to="/"></router-link>
  <router-view />
</template>

<script>
export default {
  name: 'App',
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