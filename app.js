let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto); // si se deja por fuera muestra el numero desde el principio

// Crear una funcion para poder llamarla y lograr un titulo y soliciar un numero al user
function asignarTextoElemento(elemento, texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

    //console.log(intentos); // si lo deja dentro de la fución, mostrará en consola a medida que ejecutes
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

    /* console.log(typeof(numeroSecreto)); //muestra el tipo de dato de numero secreto
    console.log(numeroSecreto); //muestra el numero secreto generado aleatoriamente
    console.log(typeof(numeroDeUsuario)); //muestra el tipo de dato de numero de usuario
    console.log(numeroDeUsuario); //muestra el numero ingresado por el usuario en cada intento
    console.log(numeroDeUsuario === numeroSecreto); // compara el numero secreto con el numero ingresado por el usuario y muestra un true or false
    */
    
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

//Crea una función para generar un numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*20)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los números
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //Si el numero generado está incluido en la lista, hacemos algo...
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervlo de numeros
    //Generar el numero aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


/* Para agregar un elemento al final del array, puedes usar el método push
    EJEMPLO:
        frutas.push("Fresa");
        console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
*/



/* para eliminar el ultimo elemento, se puede usar el metodo pop 
    EJEMPLO:
        frutas.pop();
        console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
*/