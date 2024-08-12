//este es un object literal
const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
};
//este es un object literal this es siempre para hacer referencia a ese

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("telefono", 500);
console.log(producto2);

const producto3 = new Producto("televisión", 1000);
console.log(producto3);
