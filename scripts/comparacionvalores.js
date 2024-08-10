const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2);
console.log(numero1 === numero2);
//comparadores estrictos
console.log(numero1 != numero3);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);

//comparar null y undefined

let numero;

console.log(numero);

let numero4 = null;
console.log(numero4);

console.log(numero == numero4);
console.log(numero === numero4);
