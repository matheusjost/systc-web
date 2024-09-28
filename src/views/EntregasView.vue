<template>
    <TrabalhoTable :editar="true"/>
</template>

<script>
import TrabalhoTable from '@/components/TrabalhoTable.vue';

export default {
  name: 'EntregasView',
  components: {
    TrabalhoTable,
  },
}
</script>

<style scoped>
.date-input {
    width: 200px;
}
.form {
    margin: 15px;
}
</style>
