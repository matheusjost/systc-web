<template>
    <div>
        <form class="form">
            <div class="mb-3">
                <label for="dateField" class="form-label">Selecione uma data</label>
                <input type="date" class="form-control date-input" id="dateField">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        <TrabalhoTable />
    </div>
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
