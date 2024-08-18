//Es una coleccion de llaves valores

const nombre = "monitor";
const precio = 300;
const disponible = true;

const persona = {
  name: "Sebastian",
  surname: "Herrera",
  age: 23,
  hobbies: ["correr", "estudiar"],
  soltero: true,
  contacto: {
    correo: "correo@ejemplo.com",
  },
};

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
