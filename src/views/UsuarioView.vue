<template>
    <div class="m-2 form-container">
        <form @submit.prevent="enviar">
            <h1 class="text-center">Usuários</h1>
            <div class="mb-3 text-end">
                <button type="button" @click="add()" class="btn btn-primary m-2"><i class="fa-solid fa-plus m-2"></i>Adicionar usuário</button>
            </div>
            <UsuarioTable/>  
        </form>
    </div>
</template>

<script>
import UsuarioTable from '@/components/UsuarioTable.vue'

export default {
  name: 'UsuarioView',
  components: {
    UsuarioTable,
  },
  methods: {
    add() {
        this.$router.push('/criar_usuario')
    }
  }
}
</script>

<style scoped>
</style>
