app.component('form-component',{
    template: 
    /*html*/

    `<form id="formulario"  @submit.prevent="onSubmit">
        <label>
            Nombre: <br><input v-model="valores.nombre" id="inputNombre" type="text" required>
        </label>
        <br>
        <label>
            Apellido: <br><input v-model="valores.apellido" id="inputApellido" type="text" required>
        </label>
        <br>
        <label>
            Monto: <br><input type="number" name="" id="monto" min="1000" v-model.number="valores.monto" required>
        </label>
        <br>
        <label>
            Cantidad de dias: <br><input type="number" name="" id="dias" min="30" v-model.number="valores.cantDias" required>
        </label>
        <br>
        <div> 
        <p>Desea reinvertir el capital?</p>
        <select v-model="valores.reinvertir" required>
            <option disabled value="">Seleccione una opcion</option>
            <option>Si</option>
            <option>No</option>
        </select>
        </div>
        <br>
        <br>
        <button id="btnCalcular" class="button @click="onSubmit">Calcular</button>


        </form>`,
        data(){
            return{
                valores: {
                    nombre: '',
                    apellido:'',
                    monto: 0,
                    cantDias: 0,
                    reinvertir: ''},
                montoARecibir: [0],
            }
        },
        methods: {
            onSubmit(){

                let porcentaje = this.calcularPorcentaje(this.valores);
                this.montoARecibir[0] = this.valores.monto + this.valores.monto * (this.valores.cantDias / 360) * (porcentaje / 100);
                let aux = this.montoARecibir[0];
                if (this.valores.reinvertir == 'Si') {
                    for (let index = 1; index < 4; index++) {
                        this.montoARecibir.push(aux + (aux * (this.valores.cantDias/360) * (porcentaje/100)));
                        aux = this.montoARecibir[index];
                    }
                }
                ocultarForm = true;
                this.$emit('asignarMontoARecibir', this.montoARecibir, this.valores);
            },
            calcularPorcentaje(valores){
                if (valores.cantDias < 61) {
                    return 40;
                } else if (valores.cantDias < 121) {
                    return 45;
                } else if (valores.cantDias < 361) {
                    return 50;
                } else return 65;
            },

        },
        

})