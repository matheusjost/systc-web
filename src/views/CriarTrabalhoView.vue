<template>
    <div>
        <TrabalhoDetailView :editar="false" />
    </div>
</template>

<script>

import TrabalhoDetailView from '@/views/TrabalhoDetailView.vue';

export default {
  name: 'CriarTrabalhoView',
  components: {
    TrabalhoDetailView,
  }
}

</script>

<style scoped>
</style>
