//metodos en los arreglos.

const carrito = [];

//definir un producto

const producto = {
  nombre: "Monitor",
  precio: 200,
};

carrito.push(producto);

console.table(carrito);

//el .push es para agregarlos a mi array al final es igual al array[numerodeindex] = 'Nuevo valor'

const producto2 = {
  nombre: "Telefono",
  precio: 500,
};
carrito.push(producto2);

const producto3 = {
  nombre: "Tablet",
  precio: 400,
};

carrito.unshift(producto3);

console.table(carrito);
