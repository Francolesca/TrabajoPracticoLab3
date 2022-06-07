app.component('principal', {
    template: 
    /*html*/ 
    `
    <main class="inicio-container">
            <form-component @asignarValores="asignarValoresForm"></form-component>
            <result-component></result-component>
            
    </main>
    `,
    data(){
        return {
            valores : {
                nombre: '',
                apellido:'',
                monto: 0,
                cantDias: 0,
                reinvertir: ''}
        }
    },
    methods: {
        asignarValoresForm(value) {
            this.valores = value;
        }
    }
})