<template>
    <div class="container-fluid p-2">
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Login</th>
                    <th scope="col">Email</th>
                    <th scope="col">Função</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody v-for="u in usuarios" :key="u.id">
                <tr>
                    <th scope="row">{{ u.id }}</th>
                    <td>{{ u.nome }}</td>
                    <td>{{ u.login }}</td>
                    <td>{{ u.email }}</td>
                    <td>{{ u.role }}</td>
                    <td>
                        <button class="m-1" @click="edit(u.id)" title="Editar usuário"><i class="fa-solid fa-pen-to-square"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
    name: 'UsuarioTable',
    data() {
        return {
            usuarios: [],
        }
    },
    methods: {
        async getUsuarios() {
            try { 
                const response = await apiClient.get('/usuario');
                this.usuarios = response.data.data;
            } catch(err) {
                console.log(err);
                return
            } 
        },
        edit(id) {
            this.$router.push('/usuario/' + id);
        },
    },
    mounted() {
        this.getUsuarios();
    }
}
</script>

<style>
    
</style>