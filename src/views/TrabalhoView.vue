<template>
    <div class="m-2 form-container">
        <form @submit.prevent="enviar">
            <h1 class="text-center">Trabalhos</h1>
            <div class="mb-3 text-end">
                <button type="button" v-show="canAddTrabalho()" @click="add()" class="btn btn-primary m-2"><i class="fa-solid fa-plus m-2"></i>Criar trabalho</button>
            </div>
            <TrabalhoTable/>  
        </form>
    </div>
</template>

<script>
import TrabalhoTable from '@/components/TrabalhoTable.vue'

export default {
    name: 'TrabalhoView',
    components: {
        TrabalhoTable,
    },
    methods: {
        add() {
            this.$router.push('/criar_trabalho')
        },
        canAddTrabalho() {
            var role = localStorage.getItem('role');
            return role != 'PROFESSOR';
        }
    }
}
</script>

<style scoped>
</style>
