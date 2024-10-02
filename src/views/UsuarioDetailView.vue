<template>
    <div class="m-2 form-container">
        <form @submit.prevent="gravar">
            <div class="mb-3 text-end">
                <button type="submit" class="btn btn-success m-2"><i class="fas fa-save m-2"></i>Gravar</button>
            </div>
            <div class="mb-3 row" v-show="editar">
                <label for="idField" class="col-sm-1 col-form-label">ID:</label>
                <div class="col-sm-11">
                    <input type="text" id="idField" class="form-control" :value="usuario.id" disabled>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="nomeField" class="col-sm-1 col-form-label">Nome:</label>
                <div class="col-sm-11">
                    <input type="text" id="nomeField" class="form-control" v-model="usuario.nome" required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="loginField" class="col-sm-1 col-form-label">Login:</label>
                <div class="col-sm-11">
                    <input type="text" id="loginField" class="form-control" v-model="usuario.login" required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="senhaField" class="col-sm-1 col-form-label">Senha:</label>
                <div class="col-sm-11">
                    <input type="password" id="senhaField" class="form-control" v-model="usuario.senha" required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="emailField" class="col-sm-1 col-form-label">Email:</label>
                <div class="col-sm-11">
                    <input type="text" id="emailField" class="form-control" v-model="usuario.email" required>
                </div>
            </div>
            <div class="mb-3 row">
              <label for="roleField" class="col-sm-1 col-form-label">Função:</label>
              <div class="col-sm-11 d-flex gap-2">
                <select v-model="usuario.role" id="roleField" class="form-select" required>
                  <option v-for="(r,index) in roles" :key="index" :value="r">{{ r }}</option>
                </select>
              </div>
            </div>
        </form>
    </div>
</template>

<script>
import apiClient from '@/rest/index.js';

export default {
    name: 'UsuarioDetailView',
    data() {
        return {
            usuario: {},
            roles: [],
        }
    },
    props: {
        editar: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        async gravar() {
            var alertstr;
            if (!this.editar) {
                await apiClient.post('/auth/register',
                    {
                        login: this.usuario.login,
                        senha: this.usuario.senha,
                        nome: this.usuario.nome,
                        email: this.usuario.email,
                        role: this.usuario.role,
                    }
                );
                alertstr = 'Usuário criado';
            } else {
                await apiClient.put('/auth/register/' + this.usuario.id,
                    {
                        login: this.usuario.login,
                        senha: this.usuario.senha,
                        nome: this.usuario.nome,
                        email: this.usuario.email,
                        role: this.usuario.role,
                    }
                );
                alertstr = 'Usuário editado';   
            }
            alert(alertstr);
            this.$router.push('/usuarios');
        },
        async getRoles() {
            try { 
                const response = await apiClient.get('/usuario/roles');
                this.roles = response.data.data;
            } catch(err) {
                console.log(err);
                return
            }
        },
        async getUsuario() {
            try { 
                const response = await apiClient.get('/usuario/' + this.$route.params.id);
                this.usuario = response.data.data;
            } catch(err) {
                console.log(err);
                return
            }
        },
        refresh() {
            this.getRoles();
            if (this.editar) {
                this.getUsuario();
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
