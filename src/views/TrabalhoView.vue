<template>
    <div class="m-2 form-container">
        <form @submit.prevent="enviar">
            <div class="mb-3 text-end">
              <button type="submit" class="btn btn-success">Gravar</button>
            </div>
            <div class="mb-3 row">
              <label for="idField" class="col-sm-1 col-form-label">ID:</label>
              <div class="col-sm-11">
                <input type="text" id="idField" class="form-control" :value="trabalho.id" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="tituloField" class="col-sm-1 col-form-label">Título:</label>
              <div class="col-sm-11">
                <input type="text" id="tituloField" class="form-control" :value="this.trabalho.titulo" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="resumoField" class="col-sm-1 col-form-label">Resumo:</label>
              <div class="col-sm-11">
                <input type="text" id="resumoField" class="form-control" :value="trabalho.resumo" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="alunoField" class="col-sm-1 col-form-label">Aluno:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.aluno" id="alunoField" class="form-select" aria-label="Aluno" disabled>
                  <option v-for="a in alunos" :key="a.id" :value="a.id">{{ a.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="orientadorField" class="col-sm-1 col-form-label">Orientador:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.orientador" id="orientadorField" class="form-select" aria-label="Banca 1" disabled>
                  <option v-for="p in professores" :key="p.id" :value="p.id">{{ p.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="banca1Field" class="col-sm-1 col-form-label">Banca 1:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.banca1" id="banca1Field" class="form-select" aria-label="Banca 1">
                  <option v-for="p in professores" :key="p.id" :value="p.id">{{ p.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="banca2Field" class="col-sm-1 col-form-label">Banca 2:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.banca2" id="banca2Field" class="form-select" aria-label="Banca 2">
                  <option v-for="p in this.professores" :key="p.id" :value="p.id">{{ p.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="statusField" class="col-sm-1 col-form-label">Status:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.statusTrabalho" id="statusField" class="form-select" aria-label="Status" disabled>
                  <option v-for="s in status" :key="s.id" :value="s.id">{{ s.descricao }}</option>
                </select>
              </div>
            </div>
            <table class="table table-bordered table-hover table-striped">
              <thead>
                  <tr>
                      <th scope="col">Tipo de entrega</th>
                      <th scope="col">Prazo de entrega</th>
                      <th scope="col">Prazo de avaliação</th>
                  </tr>
              </thead>
              <tbody v-for="e in entrega" :key="e.id">
                  <tr>
                      <th scope="row">{{ e.tipoEntrega.descricao }}</th>
                      <td scope="row"><input type="" id="prazoEntregaField" class="form-control" v-model="e.prazoEntrega"></td>
                      <td scope="row"><input type="datetime" id="prazoNotaField" class="form-control" v-model="e.prazoNota"></td>
                  </tr>
              </tbody>
            </table>
        </form>
    </div>
</template>

<script>
import apiClient from '@/rest';

export default {
  name: 'TrabalhoView',
  data() {
    return {
      trabalho: {
        id: '',
        titulo: '',
        resumo: '',
        aluno: '',
        orientador: '',
        banca1: '',
        banca2: '',
        statusTrabalho: ''
      },
      entrega: [],
      selecionado: '',
      professores: [],
      alunos: [],
      status: []
    }
  },
  methods: {
    async getTrabalho() {
      try { 
          const response = await apiClient.get('/trabalho/'+this.$route.params.id);
          this.trabalho = response.data.data;
      } catch(err) {
          console.log(err);
          return
      }
    },
    async getEntregas() {
      try { 
          const response = await apiClient.get('/trabalho/'+this.$route.params.id+'/entregas');
          this.entrega = response.data.data;
      } catch(err) {
          console.log(err);
          return
      }
    },
    canEditBanca() {
      return localStorage.getItem('role') == 'COORDENADOR'
    },
    enviar() {
      console.log(this.trabalho);
    },
    async getUsuarios() {
      try { 
          const response = await apiClient.get('/usuario');
          const data = response.data.data;
          this.alunos = data.filter(user => user.role === 'ALUNO');
          this.professores = data.filter(user => user.role != 'ALUNO');
      } catch(err) {
          console.log(err);
          return
      }  
    },
    async getStatus() {
      try { 
          const response = await apiClient.get('/status');
          this.status = response.data.data;
      } catch(err) {
          console.log(err);
          return
      }
    }
  },
  created() {
    this.getTrabalho();
    this.getEntregas();
    this.getUsuarios();
    this.getStatus();
  }
}
</script>

<style scoped>
</style>
