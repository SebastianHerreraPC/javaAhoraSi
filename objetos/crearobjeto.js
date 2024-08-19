//Es una coleccion de llaves valores

const nombre = "monitor";
const precio = 300;
const disponible = true;
//this hace contexto a una función que estamos u

/*Dentro de un boeto las variables son atributos o propiedades y las funciones se les llama metodos*/
const persona = {
  name: "Sebastian",
  surname: "Herrera",
  age: 23,
  hobbies: ["correr", "estudiar"],
  soltero: true,
  contacto: {
    correo: "correo@ejemplo.com",
  },
  saludar: function () {
    console.log("Hola :) ");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.name} ${this.surname} y tengo ${this.age}`
    );
  },
};
console.log(persona);
console.log(persona.name);
//invoco la funcion con :

persona.saludar();
persona.decirMiNombre();

// un objeto agrupa todo en una variable se usa las { nombreVariable: valor }

//objeto literal
const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
};

console.log(producto);
//acceder a los valores de mi objeto es con nombreObjeto.nombreVariable o tambien nombreObjeto['nombreVariable]

console.log(producto.nombre);
console.log(producto["nombre"]);

//para agregar o eliminar propiedades se tiene que hacer asi: nombreObjeto.nuevaVariable = "Valor"(agregar), para eliminar se le pone delete al inicio delete nombreObjeto.nombreVariable
producto.imagen = "imagen";
delete producto.disponible;

//para que me de las keys

console.log(Object.keys(persona));
//para que me de los valores
console.log(Object.values(persona));
//para ver si tiene alguna propiedad
console.log(persona.hasOwnProperty("name"));
