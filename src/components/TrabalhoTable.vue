<template>
    <table class="table table-bordered table-hover table-striped m-2">
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
                <th v-show="editar" scope="col">Editar</th>
                <th v-show="avaliar" scope="col">Avaliar</th>
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
                <td v-show="editar"><button @click="edit(tc.id)"><i class="fa-solid fa-pen-to-square"></i></button></td>
                <td v-show="avaliar"><button @click="evaluate(tc.id)"><i class="fa-solid fa-pencil"></i></button></td>
            </tr>
        </tbody>
</table>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
    name: 'TrabalhoTable',
    props: {
        editar: {
            type: Boolean,
        },
        avaliar: {
            type: Boolean,
        }
    },
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
            this.$router.push('/trabalho/'+id);
        },
        evaluate(id) {
            this.$router.push('/avaliacao/'+id);
        }
    },
    created() {
        this.getListTC();
    }
}
</script>

<style>
    
</style>