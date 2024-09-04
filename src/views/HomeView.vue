<template>
  <TheNavBar />
  <ListTC />
</template>

<script>
import TheNavBar from '@/components/Navbar.vue'
import ListTC from '@/components/ListTC.vue';

export default {
  name: 'HomeView',
  components: {
    ListTC,
    TheNavBar
  }
}
</script>
