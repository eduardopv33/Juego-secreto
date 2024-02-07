let numeroSecreto = generarNumeroSecreto();
let Intentos = 0;




console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;

}
function verificarIntentos() {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value)
    
    console.log(Intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${Intentos} ${(Intentos === 1) ?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el número secreto es menor');
        } else {
            asignarTextoElemento('p','el número secreto es mayor');
        }

        Intentos++;
        limpiarCaja();
        
    }
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
   
}


function generarNumeroSecreto() {
    let numeroMaximo = 10;
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    let listaNumerosSorteados = [];

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {

        //Si el número generado está incluído en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    let numeroMaximo = 10;
    asignarTextoElemento('h1','juego del número secreto!');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje intervalo de numeros
    //generar número aleatorio
    //deshabilitar el botón de nuevo juego
    condicionesIniciales();
    //Inicializar el número de intentos
    document.queryselector('#reiniciar').setAttribute('disabled','true');



}
condicionesIniciales();
