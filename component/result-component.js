app.component('result-component',{
    template: 
    /*html*/
    ` <div id="mostrarMonto" v-if="valores.reinvertir == 'No'">
        <p>Monto a recibir: {{'$' + montoARecibir[0].toFixed(2)}}
        </p>
    </div>
    
    <div id="tabla" v-if="valores.reinvertir == 'Si'">
    
        <table >
        <p>Montos a recibir:<br></p>
    
            <tr>
                <td>Período</td>
                <td>Monto inicial</td>
                <td>Monto Final</td>
            </tr>
            <tr>
                <td>1</td>
                <td id="mi1">{{valores.monto}}</td>
                <td id="mf1">{{montoARecibir[0].toFixed(2)}}</td>
            </tr>
            <tr>
                <td>2</td>
                <td id="mi2">{{montoARecibir[0].toFixed(2)}}</td>
                <td id="mf2">{{montoARecibir[1].toFixed(2)}}</td>
            </tr>
            <tr>
                <td>3</td>
                <td id="mi3">{{montoARecibir[1].toFixed(2)}}</td>
                <td id="mf3">{{montoARecibir[2].toFixed(2)}}</td>
            </tr>
            <tr>
                <td>4</td>
                <td id="mi4">{{montoARecibir[2].toFixed(2)}}</td>
                <td id="mf4">{{montoARecibir[3].toFixed(2)}}</td>
            </tr>
        </table>
    </div>
    `,
    props: {
        valores:{
        },
        montoARecibir:{}
    }
    
})