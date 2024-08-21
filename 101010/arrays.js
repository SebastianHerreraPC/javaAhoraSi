/**
 * Un array es una estructura de datos que puede almacenar multiples valores
 * la estructura es const nombre = [dato1,dato2,dato3]
 */

//ejercicio de creacion de array

let morningList = [
  "Levántarse de la cama",
  "Cepillarse los dientes",
  "Mirar Facebook",
  "Desayunar",
];

console.log(morningList);

/**
 * Tiene la propiedad length que es para ver el numero de elementos de el array se puede acceder con:
 * nombreArray.length
 * nombreArray[nombreArray.length-1] Este es para acceder a el ultimo
 */
//ejercicio para tener el primer y ultimo valor de el array

console.log(morningList[0]);
console.log(morningList[morningList.length - 1]);

/**
 * Se puede modificar el array tambien su estructura es:
 * nombreArray[posicion] = nuevo Valor
 * tambien para añadir se puede:
 * nombreArray[nombreArray.length] = nuevo valor
 */
//ejercicio de añadir y reemplazar

morningList[2] = "Ejercicio";
morningList[morningList.length] = "Lavar los platos";

console.table(morningList);
