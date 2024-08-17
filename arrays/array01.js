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
//entrar al array dentro de el array
console.log(ejemploCompuesto[2][1]);

//tambien se puede crear el array:

const c = Array.of("X", "Y", "Z", 7, 8, 9);
console.log(c);

//iniciar un arreglo y asignar el mismo valor a todas las propiedades

const d = Array(100).fill(undefined);
//agregar elementos
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);
//eliminar
colores.pop();
console.log(colores);

//for each

colores.forEach(function (elemento, index) {
  console.log(`<li id="${index}" >${elemento}</li>`);
});
