//un array sirven para agrupar datos similares a diferencia de un objeto que es una variable que agrupa elementos
//en lugar de llave y valor este solo tiene valor
const numeros = [10, 20, 30];
//no es comun pero pasa
const meses = new Array("Enero", "Febrero", "Marzo");

console.log(numeros); //3

console.log(meses);

const ejemploCompuesto = [true, "Hola", ["a", "b", "c"]];

console.log(ejemploCompuesto);
//conocer la longitud
console.log(ejemploCompuesto.length);
//solo toma el que esta en ese numero de indice
console.log(ejemploCompuesto[1]);
//entrar al array dentro de el array ,
console.log(ejemploCompuesto[2][1]);
