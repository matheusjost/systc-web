<template>
    <div class="m-2 form-container">
        <form @submit.prevent="enviar">
            <div class="mb-3 text-end">
              <button type="submit" class="btn btn-success" :disabled="!canEdit()">Gravar</button>
            </div>
            <div class="mb-3 row" v-show="editar">
              <label for="idField" class="col-sm-1 col-form-label">ID:</label>
              <div class="col-sm-11">
                <input type="text" id="idField" class="form-control" :value="trabalho.id" disabled>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="tituloField" class="col-sm-1 col-form-label">Título:</label>
              <div class="col-sm-11">
                <input type="text" id="tituloField" class="form-control" v-model="this.trabalho.titulo" :disabled="editar">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="resumoField" class="col-sm-1 col-form-label">Resumo:</label>
              <div class="col-sm-11">
                <input type="text" id="resumoField" class="form-control" v-model="trabalho.resumo" :disabled="editar">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="alunoField" class="col-sm-1 col-form-label">Aluno:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.aluno" id="alunoField" class="form-select" aria-label="Aluno" :disabled="!canEditAluno()">
                  <option v-for="a in alunos" :key="a.id" :value="a.id">{{ a.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="orientadorField" class="col-sm-1 col-form-label">Orientador:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.orientador" @change="removeUser()" id="orientadorField" class="form-select" aria-label="Banca 1" :disabled="editar">
                  <option v-for="p in orientadores" :key="p.id" :value="p.id">{{ p.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="banca1Field" class="col-sm-1 col-form-label">Banca 1:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.banca1" @change="removeUser()" id="banca1Field" class="form-select" aria-label="Banca 1" :disabled="!canEdit()">
                  <option v-for="p in banca1" :key="p.id" :value="p.id">{{ p.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="banca2Field" class="col-sm-1 col-form-label">Banca 2:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.banca2" @change="removeUser()"  id="banca2Field" class="form-select" aria-label="Banca 2" :disabled="!canEdit()">
                  <option v-for="p in this.banca2" :key="p.id" :value="p.id">{{ p.nome }}</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="statusField" class="col-sm-1 col-form-label">Status:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="trabalho.statusTrabalho" id="statusField" class="form-select" aria-label="Status" disabled>
                  <option v-for="s in status" :key="s.id" :value="s.id">{{ s.descricao }}</option>
                </select>
              </div>
            </div>
            <EntregasTable ref="EntregasTable" :editar="editar"/>
            <NotasTable :editar="editar" v-show="editar"/>
        </form>
    </div>
</template>

<script>
import apiClient from '@/rest';
import EntregasTable from '@/components/EntregasTable.vue';
import NotasTable from '@/components/NotasTable.vue';

export default {
    name: 'TrabalhoDetailView',
    props: {
        editar: {
            type: Boolean,
            default: true,
        }
    },
    components: {
        EntregasTable,
        NotasTable,
    },
    data() {
      return {
        trabalho: {
            id: '',
            titulo: '',
            resumo: '',
            aluno: '',
            orientador: '',
            banca1: '',
            banca2: '',
            statusTrabalho: ''
        },
        professores: [],
        alunos: [],
        status: [],
        orientadores: [],
        banca1: [],
        banca2: [],
      }
    },
    methods: {
		async getTrabalho() {
			try { 
				const response = await apiClient.get('/trabalho/'+this.$route.params.id);
				this.trabalho = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}
		},
		async enviar() {
            let alertstr;
			if (!this.editar) {
				await apiClient.post('/trabalho/', {
					titulo: this.trabalho.titulo,
					resumo: this.trabalho.resumo,
					aluno: this.trabalho.aluno,
					orientador: this.trabalho.orientador,
					banca1: this.trabalho.banca1,
					banca2: this.trabalho.banca2,
                    statusTrabalho: this.trabalho.statusTrabalho,
                    entrega: this.$refs.EntregasTable.entrega
				})
                this.trabalho = {};

                alertstr = 'Trabalho criado'; 
			} else {
				await apiClient.put('/trabalho/' + this.trabalho.id + '/', {
					id: this.trabalho.id,
					titulo: this.trabalho.titulo,
					resumo: this.trabalho.resumo,
					aluno: this.trabalho.aluno,
					orientador: this.trabalho.orientador,
					banca1: this.trabalho.banca1,
					banca2: this.trabalho.banca2,
                    statusTrabalho: this.trabalho.statusTrabalho,
                    entrega: this.$refs.EntregasTable.entrega
				})

                alertstr = 'Trabalho editado';
			}

            alert(alertstr);
            this.refresh();
		},
		async getUsuarios() {
			try { 
				const response = await apiClient.get('/usuario');
				const data = response.data.data;
				this.alunos = data.filter(user => user.role === 'ALUNO');
				this.professores = data.filter(user => user.role != 'ALUNO');                
                this.removeUser();
			} catch(err) {
				console.log(err);
				return
			}  
		},
		async getStatus() {
			try { 
				const response = await apiClient.get('/status-trabalho');
				this.status = response.data.data;
			} catch(err) {
				console.log(err);
				return
			}
		},
        canEditAluno() {
            var role = localStorage.getItem('role');
            return role === 'COORDENADOR' && !this.editar;
        },
        canEdit() {
            var role = localStorage.getItem('role');
            return role === 'COORDENADOR' || (role === 'ALUNO' && !this.editar);
        },
        async getAluno() {
            var login = localStorage.getItem('login');
            try { 
				const response = await apiClient.get('/usuario/login/' + login);
				this.trabalho.aluno = response.data.data.id;
			} catch(err) {
				console.log(err);
				return
			}    
        },
        removeUser() {
            this.orientadores = this.professores.filter(user => (user.id != this.trabalho.banca1) && (user.id != this.trabalho.banca2));
            this.banca1 = this.professores.filter(user => (user.id != this.trabalho.orientador) && (user.id != this.trabalho.banca2));
            this.banca2 = this.professores.filter(user => (user.id != this.trabalho.orientador) && (user.id != this.trabalho.banca1));
        },
        refresh() {
            if (this.editar) {
                this.getTrabalho();
            } else {
                this.getAluno();
            }
            this.getUsuarios();
            this.getStatus();
            this.$refs.EntregasTable.refresh();
        }
    },
    mounted() {
        this.refresh();
        this.trabalho.statusTrabalho = 1;
    }
}
</script>

<style scoped>
</style>
