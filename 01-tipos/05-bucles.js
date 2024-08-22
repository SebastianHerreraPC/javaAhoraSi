// /**
//  * controles de flujo
//  */
// //el primero es el if:

// /**
//  * let = variable
//  * if(condicion){
//  * expresion
//  * }
//  * Ejemplo de edades:
//  */

// let edad = 10;

// if (edad < 18) {
//   console.log("Es mayor de edad ");
// }

// /**
//  * Para que el codigo no se ejecute se le va a poner un else
//  * asi:
//  * if (condicion){
//  * expresion
//  * } else {
//  * }
//  */

// let años = 10;

// if (años > 18) {
//   console.log("Es mayor de edad ");
// } else {
//   console.log("No es mayor");
// }
// /**Si se les quiere añadir mas condiciones se les puede agregar con un else if
//  * if (condicion){
//  * expresion
//  * } else if  {
//  * } else  {
//  * }
//  *
//  */
// let edades = 18;

// if (edades > 17) {
//   console.log("Si es mayor");
// } else if (edades > 13) {
//   console.log("debe traer padres");
// } else {
//   console.log("No puede pasar");
// }

/**while tiene que tener una variable
 * se usa:
 * let i = 0
 * while(condicion){
 * }
 *
 */
//ejercicio numeros pares
let i = 0;
while (i < 10) {
  if (i % 2 == 0) {
    console.log("numero par", i); //imprime i
  }
  i++; //aumenta i en uno
}
console.log("fuera de while");

//IMPORTANTE: No escribir loops infinitos nunca olvidar el i++

/**
 * Do while
 * a diferencia de while lo que hace es evaluar la condicion al final de el loop
 * do {que hacer}while(condicion)
 */

let a = 0;

do {
  if (a % 2 == 0) {
    console.log("numero par", a);
    a++;
  }
} while (i < 10);
