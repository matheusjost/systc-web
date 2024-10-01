<template>
    <div class="container-fluid p-2">
        <h1 class="text-center">Reuniões</h1>
        <div class="mb-3 text-end">
            <button @click="newMeeting()" type="submit" class="btn btn-primary">Criar</button>
        </div>
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Data/hora</th>
                    <th scope="col">Sobre</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody v-for="r in reunioes" :key="r.id">
                <tr>
                    <th scope="row">{{ r.id }}</th>
                    <td>{{ r.datahora }}</td>
                    <td>{{ r.sobre }}</td>
                    <button class="m-1" @click="edit(tc.id)" title="Editar reunião"><i class="fa-solid fa-pen-to-square"></i></button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import apiClient from '@/rest/index.js';

export default {
  name: 'ReuniaoView',
  data() {
    return {
        reunioes: []
    }
  },
  methods: {
    async getReunioes() {
        try { 
            const response = await apiClient.get('/trabalho/' + this.$route.params.id + '/reuniao');
            this.reunioes = response.data.data;
        } catch(err) {
            console.log(err);
            return
        }
    },
    edit() {

    },
    newMeeting() {
        this.$router.push('/trabalho/' + this.$route.params.id + '/criar_reuniao');
    }
  }
}

</script>

<style scoped>
</style>
