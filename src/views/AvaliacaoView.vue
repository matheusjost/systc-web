<template>
    <TrabalhoTable :avaliar="true"/>
</template>

<script>
import TrabalhoTable from "@/components/TrabalhoTable.vue"

export default {
  name: 'AvaliacaoView',
  components: {
    TrabalhoTable,
  }
}
</script>

<style scoped>
</style>
