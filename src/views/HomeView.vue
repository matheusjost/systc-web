<template>
  <TrabalhoTable :editar="false" style="width: 60%; min-width: 495px" />
</template>

<script>
import TrabalhoTable from '@/components/TrabalhoTable.vue';

export default {
  name: 'HomeView',
  components: {
    TrabalhoTable
  }
}
</script>
