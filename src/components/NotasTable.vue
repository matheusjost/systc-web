<template>
    <table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
                <th scope="col">Tipo de entrega</th>
                <th scope="col">Avaliador</th>
                <th scope="col">Critério</th>
                <th scope="col">Nota</th>
            </tr>
        </thead>
        <tbody v-for="n in notas" :key="n.id">
            <tr>
                <th scope="row">{{ n.tipoEntrega.descricao }}</th>
                <td scope="row"><input type="text" id="avaliadorField" class="form-control" :value="n.avaliador" disabled></td>
                <td scope="row"><input type="text" id="criterioField" class="form-control" :value="n.criterio" disabled></td>
                <td scope="row"><input type="number" step="0.01" id="notaField" class="form-control" :value="n.nota" disabled></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import apiClient from '@/rest';

export default {
    name: 'NotasTable',
    data() {
      return {
        notas: [],
      }
    },
    props: {
        editar: {
            type: Boolean,
        }
    },
    methods: {
		async getNotas() {
			try { 
				const response = await apiClient.get('/trabalho/' + this.$route.params.id + '/notas');
				this.notas = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}
		},
    },
    created() {
        if (this.editar)
            this.getNotas();
    }
}
</script>

<style scoped>
</style>
