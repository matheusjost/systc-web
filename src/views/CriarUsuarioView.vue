<template>
    <div>
        <UsuarioDetailView :editar="false" />
    </div>
</template>

<script>

import UsuarioDetailView from '@/views/UsuarioDetailView.vue';

export default {
  name: 'CriarUsuarioView',
  components: {
    UsuarioDetailView,
  }
}

</script>

<style scoped>
</style>
