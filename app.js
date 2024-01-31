let numeroSecreto=0;
let intentos=0;
let numerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento); //Conectar el elementoHTML en una variable
    elementoHTML.innerHTML= texto; //Con inner HTML le doy un nombre al elementoHTML
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value)
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número  en ${intentos} ${intentos===1?'vez':'veces'}`)
        //Cuando el usuario acerte, el botón reiniciar se habilita.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        numeroDeUsuario>numeroSecreto?asignarTextoElemento('p','Intente nuevamente, el numero es menor'): asignarTextoElemento('p','Intente nuevamente, el numero es mayor');
        intentos++
        limpiarCaja();
    }
};

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    // El numero generado está incluido en la lista?
    if (numerosSorteados.includes(numeroGenerado)){
        if(numerosSorteados.length===numeroMaximo){
            numerosSorteados=[]
            //Volver a intentar generar un nuevo número
            return generarNumeroSecreto();
        }
        return generarNumeroSecreto();
    } else{
        numerosSorteados.push(numeroGenerado)
        console.log(numerosSorteados)
        return numeroGenerado
    }
};

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1
};

function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario')
   valorCaja.value='';
}

function reiniciarJuego() {
    //limpirar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



