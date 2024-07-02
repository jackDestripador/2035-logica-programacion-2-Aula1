let numeroSecreto = generararNumeroSecreto();
let numeroIntentos = 1;

console.log(numeroSecreto);
let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function verificarintento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroIntentos);

  if (numeroUsuario == numeroSecreto) {
    asignarTextoElemento(
      "h1",
      `¡Felicidades! ¡Adivinaste el número secreto! en ${numeroIntentos} ${
        numeroIntentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("h1", "El número secreto es menor");
    } else {
      asignarTextoElemento("h1", "El número secreto es mayor");
    }
    numeroIntentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generararNumeroSecreto() {
  return Math.floor(Math.random() * 10 + 1);
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", "Indica un número del 1 al 100");
  numeroSecreto = generararNumeroSecreto();
  intentos = 1;
}

function reiniciarjuego() {
  //limpiar caja
  limpiarCaja();

  //indicar mensaje de intervalos de nímeros
  condicionesIniciales();
  //Generar el numero aleatori
  numeroSecreto = generararNumeroSecreto();
  //indicar numero de intentos
  intentos = 1;
  //Deshabilitar el botón de nuevo juego
}

condicionesIniciales();
