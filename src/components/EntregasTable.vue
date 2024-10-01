<template>
    <table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
                <th scope="col">Tipo de entrega</th>
                <th scope="col">Prazo de entrega</th>
                <th scope="col">Prazo de avaliação</th>
            </tr>
        </thead>
        <tbody v-for="e in entrega" :key="e.id">
            <tr>
                <th scope="row">{{ e.tipoEntrega.descricao }}</th>
                <td scope="row"><input type="date" id="prazoEntregaField" class="form-control" v-model="e.prazoEntrega" :max="e.prazoNota" :disabled="!canEdit()"></td>
                <td scope="row"><input type="date" id="prazoNotaField" class="form-control" v-model="e.prazoNota" :min="e.prazoEntrega" :disabled="!canEdit()"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import apiClient from '@/rest';

export default {
    name: 'EntregasTable',
    data() {
      return {
        entrega: [],
      }
    },
    props: {
        editar: {
            type: Boolean,
        }
    },
    methods: {
		async getEntregas() {
			try { 
				const response = await apiClient.get('/trabalho/'+this.$route.params.id+'/entregas');
				this.entrega = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}
		},
        canEdit() {
            var role = localStorage.getItem('role');
            return role === 'COORDENADOR';
        },
        async getTiposEntrega() {
            try { 
				const response = await apiClient.get('/tipo-entrega');
                var data = response.data.data;

                this.entrega = [];
                data.forEach((tipoentrega) => {
                    this.entrega.push({tipoEntrega: tipoentrega})
                });
			} catch(err) {
				console.log(err);
				return
			}  
        },
        refresh() {
            if (this.editar)
                this.getEntregas();
            else {
                this.getTiposEntrega();
            }
        }
    },
    mounted() {
        this.refresh();
    }
}
</script>

<style scoped>
</style>
