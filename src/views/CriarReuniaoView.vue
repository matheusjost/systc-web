<template>
    <div class="m-2 form-container">
        <form @submit.prevent="enviar">
            <div class="mb-3 text-end">
                <button type="button" @click="addAnexos()" class="btn btn-primary m-2"><i class="fa-solid fa-plus m-2"></i>Adicionar anexo</button>
                <button type="submit" class="btn btn-success m-2"><i class="fas fa-save m-2"></i>Gravar</button>
            </div>
            <div class="mb-3 row" v-show="editar">
                <label for="idField" class="col-sm-1 col-form-label">ID:</label>
                <div class="col-sm-11">
                    <input type="text" id="idField" class="form-control" v-model="reuniao.id" disabled>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="dataField" class="col-sm-1 col-form-label">Data:</label>
                <div class="col-sm-1">
                    <input type="date" id="dataField" class="form-control" v-model="reuniao.datahora" required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="sobreField" class="col-sm-1 col-form-label">Sobre:</label>
                <div class="col-sm-11">
                    <input type="text" id="sobreField" class="form-control" v-model="reuniao.sobre" required>
                </div>
            </div>
            <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Anexos</th>
                    </tr>
                </thead>
                <tbody v-for="(a,index) in anexos" :key="index">
                    <tr>
                        <th scope="row"><input type="file" id="sobreField" class="form-control" @change="fileChange(index)" required></th>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>

<script>

export default {
  name: 'CriarReuniaoView',
  data() {
    return {
        reuniao: {},
        anexos: [],
    }
  },
  props: {
    editar: {
        type: Boolean,
    }
  },
  methods: {
    enviar() {
        this.reuniao.anexos = this.anexos;
    },
    fileChange(id) {
        this.anexos[id] = event.target.files[0];
    },
    addAnexos() {
        this.anexos.push('');
    }
  },
}

</script>

<style scoped>
</style>
