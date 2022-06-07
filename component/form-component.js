app.component('form-component',{
    template: 
    /*html*/

    `<form id="formulario" class="inicio-form" @submit.prevent="onSubmit">
        <label>
            Nombre: <input v-model="valores.nombre" id="inputNombre" type="text" required>
        </label>
        <br>
        <label>
            Apellido: <input v-model="valores.apellido" id="inputApellido" type="text" required>
        </label>
        <br>
        <label>
            Monto: <input type="number" name="" id="monto" min="1000" v-model.number="valores.monto" required>
        </label>
        <br>
        <label>
            Cantidad de dias: <input type="number" name="" id="dias" min="30" v-model.number="valores.cantDias" required>
        </label>
        <br>
        <div id="mostrarError" class="mensajeError"></div>
        <div> 
        <p>Desea reinvertir el capital?</p>
        <select v-model="valores.reinvertir" required>
            <option disabled value="">Seleccione una opcion</option>
            <option>Si</option>
            <option>No</option>
        </select>
        </div>
        <button id="btnCalcular" @click="onSubmit">Calcular</button>
        </form>`,
        data(){
            return{
                valores: {
                    nombre: '',
                    apellido:'',
                    monto: 0,
                    cantDias: 0,
                    reinvertir: ''}
            }
        },
        methods: {
            onSubmit(){
                let valoresForm = this.valores;
                this.$emit('asignarValores', valoresForm);
            }
        },
        

})