//creacion de números
const numero1 = 30;
const numero2 = 20;
const numero3 = 20.5;

console.log(numero1);
console.log(numero2);
console.log(numero3);

//operaciones basicas

let resultado;
//sumas
resultado = numero1 + numero2;
//restas
resultado = numero1 - numero2;
//division
resultado = numero1 / numero2;
//multiplicacion
resultado = numero1 * numero2;
//residuo
resultado = numero1 % numero2;

console.log(resultado);

let numero;
//redondear hacia arriba
da = Math.ceil(2.1);
//redondear hacia abajo
da = Math.floor(2.9);
//saber minimos
da = Math.min(3, 2, 1, 3, 5, 3, 3);
//saber maximos
da = Math.max(54, 3, 135, 46, 7, 8);
//aleatorios
da = Math.random();
//aleatorios dentro de un rango
da = Math.floor(Math.random() * 30);
console.log(da);
