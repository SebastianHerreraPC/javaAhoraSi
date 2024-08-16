//strings o cadenas de texto representan textos que se pueden asignar a variables
const producto = 'Monitor de 20"';
const producto2 = String("monitor 24 pulgadas");
const producto3 = new String("Monitor de 25 '24' ");

const product = 'Monitor 20"';

console.log(product);
//saber los caracteres de los strings
console.log(product.length);
//en que posicion esta la palabra segun el string
console.log(product.indexOf("Monitor"));
//Para saber si lo incluye, es util en buscadores
console.log(product.includes("Monitor"));
console.log(product.includes("monitor")); //este es false por las minusculas

//concatenar strings

let nombre = "Sebas";
let apellido = "Herrera";
let saludo = "Hola mi nombre es " + nombre + " " + apellido;
console.log(saludo);

let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(nuevoSaludo);
