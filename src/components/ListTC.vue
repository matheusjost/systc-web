<template>
    <div>
        <table class="tabela" cellspacing="0">
            <tr>
                <td class="celula">ID</td>
                <td class="celula">Título</td>
                <td class="celula">Autor</td>
            </tr>
            <tr v-for="tc in listTC" :key="tc.id">
                <td class="celula">{{ tc.id }}</td>
                <td class="celula">{{ tc.titulo }}</td>
                <td class="celula">{{ tc.autor }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
    name: 'ListTC',
    data() {
        return {
            listTC: null
        }
    },
    methods: {
        async getListTC() {
            try { 
                const response = await apiClient.get('/tc');
                this.listTC = response.data;
            } catch(err) {
                this.listTC = err;
            }
        },
    },
    mounted() {
        this.getListTC();
    }
}
</script>

<style>

table {
    width: 42%;
    margin: 20px 20px;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 460px;
}

th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: #4CAF50;
    color: white;
}

tr:hover {
    background-color: #f1f1f1;
}

td a {
    color: #3498db;
    text-decoration: none;
}

td a:hover {
    text-decoration: underline;
}
    
</style>