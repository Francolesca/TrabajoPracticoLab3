app.component('principal', {
    template: 
    /*html*/ 
    `
    <main class="inicio-container">
            <form-component @asignarMontoARecibir="asignarMontoARecibir" ></form-component>
            <result-component :montoARecibir="montoARecibir" :valores="valores"></result-component>
            
    </main>
    `,
    data(){
        return {
            valores : {
                nombre: '',
                apellido:'',
                monto: 0,
                cantDias: 0,
                reinvertir: ''},
                montoARecibir: [0],
                active: true
        }
    },
    methods: {
        asignarMontoARecibir(value, valueP) {
            this.montoARecibir = value;
            this.valores = valueP;
        }
    }
})