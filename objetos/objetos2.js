//acceder a los objetos y

const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
};
//extraje el valor de el nombre y luego lo puse en variable
// const nombre = producto.nombre;
// console.log(nombre);

//object destructuring hace lo mismo pero mas corto asi const {nombre de la variable de mi objeto} = objeto

// const { precio } = producto;
// console.log(precio);

//para mas corto y los demas son:

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
