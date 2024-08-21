/**
 * controles de flujo
 */
//el primero es el if:

/**
 * let = variable
 * if(condicion){
 * expresion
 * }
 * Ejemplo de edades:
 */

let edad = 10;

if (edad < 18) {
  console.log("Es mayor de edad ");
}

/**
 * Para que el codigo no se ejecute se le va a poner un else
 * asi:
 * if (condicion){
 * expresion
 * } else {
 * }
 */

let años = 10;

if (años > 18) {
  console.log("Es mayor de edad ");
} else {
  console.log("No es mayor");
}
/**Si se les quiere añadir mas condiciones se les puede agregar con un else if
 * if (condicion){
 * expresion
 * } else if  {
 * } else  {
 * }
 *
 */
let edades = 18;

if (edades > 17) {
  console.log("Ya es mayor");
} else if (edades > 13) {
  console.log("debe traer padres");
} else {
  console.log("No puede pasar");
}
