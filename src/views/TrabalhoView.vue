<template>
    <div class="m-2 form-container">
        <form>
            <div class="mb-3 row">
              <label for="idField" class="col-sm-1 col-form-label">ID:</label>
              <div class="col-sm-10">
                <input type="text" id="idField" class="form-control" :value="idTrabalho" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="tituloField" class="col-sm-1 col-form-label">Título:</label>
              <div class="col-sm-10">
                <input type="text" id="tituloField" class="form-control" :value="trabalho.titulo" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="resumoField" class="col-sm-1 col-form-label">Resumo:</label>
              <div class="col-sm-10">
                <input type="text" id="resumoField" class="form-control" :value="trabalho.resumo" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="idAlunoField" class="col-sm-1 col-form-label">Aluno:</label>
              <div class="col-sm-10 d-flex gap-2">
                <input type="text" id="idAlunoField" class="form-control" :value="trabalho.idaluno" style="width: 100px" disabled>
                <input type="text" id="nomeAlunoField" class="form-control" :value="trabalho.nomealuno" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="idOrientadorField" class="col-sm-1 col-form-label">Orientador:</label>
              <div class="col-sm-10 d-flex gap-2">
                <input type="text" id="idOrientadorField" class="form-control" :value="trabalho.idorientador" style="width: 100px" disabled>
                <input type="text" id="nomeOrientadorField" class="form-control" :value="trabalho.nomeorientador" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="idBanca1Field" class="col-sm-1 col-form-label">Banca 1:</label>
              <div class="col-sm-10 d-flex gap-2">
                <input type="text" id="idBanca1Field" class="form-control" :value="trabalho.idbanca1" style="width: 100px" disabled>
                <input type="text" id="nomeBanca1Field" class="form-control" :value="trabalho.nomebanca1" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="idBanca2Field" class="col-sm-1 col-form-label">Banca 2:</label>
              <div class="col-sm-10 d-flex gap-2">
                <input type="text" id="idBanca2Field" class="form-control" :value="trabalho.idbanca2" style="width: 100px" disabled>
                <input type="text" id="nomeBanca2Field" class="form-control" :value="trabalho.nomebanca2" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="idStatusField" class="col-sm-1 col-form-label">Status:</label>
              <div class="col-sm-10 d-flex gap-2">
                <input type="text" id="idStatusField" class="form-control" :value="trabalho.idstatus" style="width: 100px" disabled>
                <input type="text" id="nomeStatusField" class="form-control" :value="trabalho.nomestatus" disabled>
              </div>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
import apiClient from '@/rest';

export default {
  name: 'TrabalhoView',
  data() {
    return {
      idTrabalho: null,
      trabalho: null,
    }
  },
  methods: {
    async getTrabalho() {
      try { 
          const response = await apiClient.get('/trabalho/'+this.idTrabalho);
          this.trabalho = response.data.data;
      } catch(err) {
          console.log(err);
          return
      }
    }
  },
  mounted() {
    this.idTrabalho = this.$route.params.id;
  }
}
</script>

<style scoped>
</style>
