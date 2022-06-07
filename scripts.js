// window.onload = iniciar;
// function iniciar() {
//   let formulario = document
//     .getElementById("formulario")
//     .addEventListener("submit", function (e) {
//       e.preventDefault();
//     });
//   let btnCalcular = document.getElementById("btnCalcular");
//   btnCalcular.addEventListener("click", calcular);
// }

// function calcular() {
//   let nombre = document.getElementById("inputNombre").value;
//   let apellido = document.getElementById("inputApellido").value;
//   let montoAInvertir = parseInt(document.getElementById("monto").value);
//   let cantidadDias = parseInt(document.getElementById("dias").value);
//   let condicion = true;
//   if (nombre.trim() === "") {
//     condicion = false;
//     //alert("Nombre vacío");
//   }
//   if (apellido.trim() === "") {
//     //alert("Apellido vacío");
//     condicion = false;
//   }
//   if (montoAInvertir < 1000) {
//     //alert("El monto a invertir debeser mínimo $1000");
//     condicion = false;
//   }
//   if (cantidadDias < 30) {
//     condicion = false;
//   }

//   let porcentaje = 0;
//   if (cantidadDias < 61) {
//     porcentaje = 40;
//   } else if (cantidadDias < 121) {
//     porcentaje = 45;
//   } else if (cantidadDias < 361) {
//     porcentaje = 50;
//   } else porcentaje = 65;
//   let montoFinal =
//     montoAInvertir + montoAInvertir * (cantidadDias / 360) * (porcentaje / 100);
//   //document.getElementById('mostrarMonto').innerHTML = montoFinal;
//   if (condicion === false) {
//     document.getElementById("mostrarError").innerHTML =
//       "Hubo un error, revise los datos ingresados.";
//   } else {
//     let chekeado = document.getElementsByName("option");
//     if (chekeado[0].checked === true) {
//       document.getElementById("mostrarError").innerHTML = "";
//       generarTabla(montoAInvertir, montoFinal, cantidadDias, porcentaje);
//     }  
//     if (chekeado[0].checked === false) {
//       document.getElementById("mostrarError").innerHTML = "";
//       mostrar(montoFinal);
//     }
//   }

// }

// function mostrar(montoFinal) {
//   document.getElementById("mostrarMonto").innerHTML = "<h2>Monto a recibir: </h2>" + "<h2> $" + montoFinal.toFixed(2) + "</h2>";
//   //document.getElementById("visibilidadTabla").style.visibility = "hidden";
// }
// function generarTabla(montoAInvertir, montoFinal, cantidadDias, porcentaje) {
//   document.getElementById("mi1").innerHTML = montoAInvertir.toFixed(2);
//   document.getElementById("mf1").innerHTML = montoFinal.toFixed(2);
//   let montoInicial = montoFinal;
//   montoFinal =
//     (montoInicial + montoAInvertir * (cantidadDias / 360) * (porcentaje / 100));
//   document.getElementById("mi2").innerHTML = montoInicial.toFixed(2);
//   document.getElementById("mf2").innerHTML = montoFinal.toFixed(2);
//   montoInicial = montoFinal;
//   montoFinal =
//     montoInicial + montoAInvertir * (cantidadDias / 360) * (porcentaje / 100);
//   document.getElementById("mi3").innerHTML = montoInicial.toFixed(2);
//   document.getElementById("mf3").innerHTML = montoFinal.toFixed(2);
//   montoInicial = montoFinal;
//   montoFinal =
//     montoInicial + montoAInvertir * (cantidadDias / 360) * (porcentaje / 100);
//   document.getElementById("mi4").innerHTML = montoInicial.toFixed(2);
//   document.getElementById("mf4").innerHTML = montoFinal.toFixed(2);

//   document.getElementById("tabla").style.visibility = "visible";
// }
const app = Vue.createApp ({
  data() {
      return {}
  },
  methods: {
  }
})