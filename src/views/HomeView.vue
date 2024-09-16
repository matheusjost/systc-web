<template>
  <TheNavBar />
  <TrabalhoTable style="margin: 10px; width: 50%; min-width: 495px" />
</template>

<script>
import TheNavBar from '@/components/Navbar.vue'
import TrabalhoTable from '@/components/TrabalhoTable.vue';

export default {
  name: 'HomeView',
  components: {
    TrabalhoTable,
    TheNavBar
  }
}
</script>
