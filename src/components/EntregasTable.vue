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
                <th scope="row">{{ getDescricaoTipo(e.idTipoEntrega) }}</th>
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
        tipos_entrega: [],
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
                this.tipos_entrega = response.data.data;

                if (!this.editar) {
                    this.entrega = [];
                    this.tipos_entrega.forEach((tpe) => {
                        this.entrega.push({idTipoEntrega: tpe.id})
                    })
                }
			} catch(err) {
				console.log(err);
				return
			}  
        },
        async getCriterios() {
            try { 
                const response = await apiClient.get('/criterio');
                var criterios = response.data.data;
                var criterio_entrega = {criterio: criterios.id};

                criterio_entrega = [];
                criterios.forEach((c) => {
                    criterio_entrega.push({criterio: c.id});
                });

                this.entrega.forEach((e) => {
                    e.nota = criterio_entrega;
                });
			} catch(err) {
				console.log(err);
				return
			}
        },
        refresh() {
            this.getTiposEntrega();
            if (this.editar)
                this.getEntregas();

            this.getCriterios();
        },
        getDescricaoTipo(id) {
            if (id == undefined)
                return '';

            var entrega_aux = this.tipos_entrega.find(e => e.id === id);   
            if (entrega_aux == undefined)
                return '';
            
            return entrega_aux.descricao;
        }
    },
    created() {
        this.refresh();
    }
}
</script>

<style scoped>
</style>
