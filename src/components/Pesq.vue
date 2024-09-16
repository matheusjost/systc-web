<template>
    <div class="modal fade" id="teste" ref="modalPesq" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-modal="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <form @submit.prevent="pesq">
                        <div class="form-group">
                            <label for="titlePesq">Título:</label>
                            <input type="text" class="form-control" id="titlePesq" aria-describedby="titleHelp" placeholder="Informe o título">
                        </div>
                        <button type="submit" class="btn btn-primary">Pesquisar</button>
                    </form>
                </div>
                <div class="modal-body">
                    <TrabalhoTable />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import TrabalhoTable from '@/components/TrabalhoTable.vue';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

export default {
    name: "PesqView",
    props: {
    },
    components: {
        TrabalhoTable
    },
    methods: {
        async pesq() {

        },
        
        closeModal() {
            this.modal.hide();
        },
        showModal() {
            this.modal.show();
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modalPesq);
    },
    data() {
        return {
            modal: null,
        }
    }
}
</script>

<style>

</style>