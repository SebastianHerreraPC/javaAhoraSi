const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

const boolean3 = new Boolean(true);
//aqui se creo como objeto
console.log(boolean3);
console.log(typeof boolean3);

//buenas practicas
const autenticado = true;
if (autenticado) {
  console.log("estas autenticado");
} else {
  console.log("no estas ");
}
// como el true esta implicito no se pone en el if , si es ternario es ( variable es true o false el ? es como el if y el : es como else )

console.log(autenticado ? "Si estas autenticado" : "no lo estas");
