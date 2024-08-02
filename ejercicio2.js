/* 1) - Crear una función que muestra "¡Hola, mundo!" en la consola */

function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();

/* 2) - Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola */

function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");

/* 3) - Crear una función que recibe un número como parámetro y devuelve el doble de ese número */

function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

/* 4) - Crear una función que recibe tres números como parámetros y devuelve su promedio */

function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

/* 5) - Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos */

function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

/* 6) - Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo */

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);
