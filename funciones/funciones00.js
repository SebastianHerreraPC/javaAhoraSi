//las funciones son bloques de codigo que se define una vez pero se puede ejecutar las veces que sean
//puede o no recibir parametros puede o no regresar valores tambien son como objetos

//Para declarar una funcion puede ser:

//funcion declarada
/**
 function nombre(){
 }
Esto llama una funcion: 
 nombre()
 */

function unaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

// unaFuncion();

//funcion con  valores
//return retorna los valores retorna el valor una antes de el return y todo lo que esta despues se ignora

function funcionParaDevolverValor() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
  return "La funcion devolvio una cadena de texto ";
}

// let valorDFuncion = funcionParaDevolverValor();

// console.log(valorDFuncion);

//aceptar parametros

function saludar(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("Sebastian", 23);
saludar();

//funciones declaradas vs funciones expresadas

funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada"
  );
}
//funcion anonima

const funcionExpresada = function () {
  console.log(
    "esto es una exprecion expresada, es decir una funcion que se le asigno como valor a una variable, si se invoca la funcion antes de su definicion JS nos dira..."
  );
};

funcionExpresada();

function sumar(x, y) {
  return x + y;
}

console.log(sumar(1, 2));
