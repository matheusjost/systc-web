<template>
    <table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
                <th scope="col">Tipo de entrega</th>
                <th scope="col">Critério</th>
                <th scope="col">Nota orientador</th>
                <th scope="col">Nota banca 1</th>
                <th scope="col">Nota banca 2</th>
            </tr>
        </thead>
        <tbody v-for="n in notas" :key="n.id">
            <tr>
                <th scope="row">{{ getDescricaoTipo(n.idTipoEntrega) }}</th>
                <th scope="row">{{ getDescricaoCriterio(n.criterio) }}</th>
                <td scope="row"><input type="number" step="0.01" id="notaField" class="form-control" :value="n.notaOrientador" disabled></td>
                <td scope="row"><input type="number" step="0.01" id="notaField" class="form-control" :value="n.notaBanca1" disabled></td>
                <td scope="row"><input type="number" step="0.01" id="notaField" class="form-control" :value="n.notaBanca2" disabled></td>
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
        tipos_entrega: [],
        criterios: [],
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
        async getTiposEntrega() {
            try { 
				const response = await apiClient.get('/tipo-entrega');
                this.tipos_entrega = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}  
        },
        getDescricaoTipo(id) {
            if (id == undefined) 
                return ''

            var entrega_aux =  this.tipos_entrega.find(e => e.id === id);
            if (entrega_aux == undefined)
                return '';

            return entrega_aux.descricao;
        },
        async getCriterios() {
            try { 
                const response = await apiClient.get('/criterio');
                this.criterios = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}
        },
        getDescricaoCriterio(id) {
            if (id == undefined) 
                return ''

            var criterio_aux = this.criterios.find(c => c.id === id);
            if (criterio_aux == undefined)
                return '';

            return criterio_aux.descricao;
        }
    },
    created() {
        this.getTiposEntrega();
        this.getCriterios();
        if (this.editar)
            this.getNotas();
    }
}
</script>

<style scoped>
</style>
