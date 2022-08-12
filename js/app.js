let contadorHoras = 0;
let contadorSegundos = 0;
let contadorMinutos = 0;
let parrafoTemporizador = document.querySelector("#temporizador");
parrafoTemporizador.innerHTML = `${contadorHoras} hs :${contadorMinutos} min :${contadorSegundos} seg`;
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", enviar);
let ingresarHora = document.querySelector("#ingresarHora").value;
let ingresarMinutos = document.querySelector("#ingresarMinutos").value;
let ingresarSegundos = document.querySelector("#ingresarSegundos").value;

function enviar(e) {
  e.preventDefault();
   ingresarHora = document.querySelector("#ingresarHora").value;
   ingresarMinutos = document.querySelector("#ingresarMinutos").value;
   ingresarSegundos = document.querySelector("#ingresarSegundos").value;
  console.log(ingresarHora);
  console.log(ingresarMinutos);
  console.log(ingresarSegundos);
}
function temporizador() {
  if (ingresarSegundos <= 0) {
    ingresarSegundos = 60;
    ingresarMinutos--;
    if (ingresarMinutos <= 0) {
      ingresarMinutos = 0
      ingresarHora--;
      if(ingresarHora<= 0){
        ingresarHora = 0
        ingresarMinutos = 59
      }
    }
  }
  ingresarSegundos--;
  parrafoTemporizador.innerHTML = `${ingresarHora} hs :${ingresarMinutos} min :${ingresarSegundos} seg`;
}

function iniciar() {
  identificador = setInterval(temporizador, 1000);
}
function parar() {
  clearInterval(identificador);
}
function reset() {
  clearInterval(identificador);
  ingresarHora = 0;
  ingresarMinutos = 0;
  ingresarSegundos = 0;
  parrafoTemporizador.innerHTML = `${ingresarHora} hs :${ingresarMinutos} min :${ingresarSegundos} seg`;
}
