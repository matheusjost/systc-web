<template>
    <div class="container-fluid p-2">
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Resumo</th>
                    <th scope="col">Aluno</th>
                    <th scope="col">Orientador</th>
                    <th scope="col">Banca 1</th>
                    <th scope="col">Banca 2</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody v-for="tc in listTC" :key="tc.id">
                <tr>
                    <th scope="row">{{ tc.id }}</th>
                    <td>{{ tc.titulo }}</td>
                    <td>{{ tc.resumo }}</td>
                    <td>{{ tc.aluno }}</td>
                    <td>{{ tc.orientador }}</td>
                    <td>{{ tc.banca1 }}</td>
                    <td>{{ tc.banca2 }}</td>
                    <td>{{ tc.statusTrabalho }}</td>
                    <td>
                        <button class="m-1" @click="edit(tc.id)" title="Editar trabalho"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="m-1" @click="evaluate(tc.id)" title="Avaliar trabalho"><i class="fa-solid fa-check"></i></button>
                        <button class="m-1" v-show="showReunioes(tc.aluno,tc.orientador)" @click="meeting(tc.id)" title="Reuniões"><i class="fa-solid fa-comments"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
    name: 'TrabalhoTable',
    data() {
        return {
            listTC: null
        }
    },
    methods: {
        async getListTC() {
            try { 
                const response = await apiClient.get('/trabalho');
                this.listTC = response.data.data;
            } catch(err) {
                console.log(err);
                return
            }
        },
        edit(id) {
            this.$router.push('/trabalho/' + id);
        },
        evaluate(id) {
            this.$router.push('/avaliacao/' + id);
        },
        meeting(id) {
            this.$router.push('/trabalho/' + id + '/reuniao');
        },
        showReunioes(aluno, orientador) {
            return aluno != orientador;
        }
    },
    created() {
        this.getListTC();
    }
}
</script>

<style>
    
</style>