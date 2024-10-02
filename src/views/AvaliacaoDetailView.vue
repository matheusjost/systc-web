<template>
    <div class="m-2 form-container">
        <form @submit.prevent="enviar">
            <div class="mb-3 text-end">
              <button type="submit" class="btn btn-success">Gravar</button>
            </div>
            <div class="mb-3 row">
              <label for="tipoEntregaField" class="col-sm-2 col-form-label">Tipo de entrega:</label>
              <div class="col-sm-10 d-flex gap-2">
                <select v-model="idEntrega" id="tipoEntregaField" class="form-select" required>
                  <option v-for="e in entrega" :key="e.id" :value="e.id">{{ e.descricao }}</option>
                </select>
              </div>
            </div>
            <h1 class="text-center mb-2">Critérios</h1>
            <div class="mb-3 row" v-for="c in criterios" :key="c.id">
              <label for="notaField" class="col-sm-2 col-form-label">{{ c.descricao + ':' }}</label>
              <div class="col-sm-1">
                <input type="number" :min="0" :max="10" step="any" id="notaField" class="form-control" v-model="c.nota" required>
              </div>
              <label for="comentarioField" class="col-sm-1 col-form-label text-end">{{ 'Comentario:' }}</label>
              <div class="col-sm-8">
                <input type="text" id="comentarioField" class="form-control" required>
              </div>
            </div>
        </form>
    </div>
</template>

<script>
import apiClient from "@/rest"

export default {
    name: 'AvaliacaoDetailView',
    data() {
        return {
            criterios: [],
            entrega: {},
            entrega_trabalho: [],
            idEntrega: 0,
            trabalho: {},
        }
    },
    methods: {
        async enviar() {
            var notas = []
            this.criterios.forEach((c) => {
                notas.push({criterio: c.id, nota: c.nota});
            });

            await apiClient.post('/trabalho/' + this.$route.params.id + '/avaliar/', {
                idTrabalho: this.$route.params.id,
                roleTrabalho: "ORIENTADOR",
                entregaNota: [
                    {
                        idEntrega: this.idEntrega,
                        notas: notas
                    }
                ]
            });

            alert('Trabalho avaliado!');
            this.$router.push('/avaliacao');
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
        async getTiposEntrega() {
            try { 
				const response = await apiClient.get('/tipo-entrega');
                this.entrega = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}  
        },
        async getEntrega() {
            try { 
				const response = await apiClient.get('/trabalho/' + this.$route.params.id + '/entregas');
                this.entrega_trabalho = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}  
        },
        async getTrabalho() {
            try { 
				const response = await apiClient.get('/trabalho/' + this.$route.params.id);
                this.trabalho = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}  
        },
        role() {
        }
    },
    mounted() {
        this.getCriterios();
        this.getTiposEntrega();
        this.getEntrega();
        this.getTrabalho();
    }
}

</script>

<style scoped>
</style>
