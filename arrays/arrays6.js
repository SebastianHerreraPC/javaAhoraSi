const carrito = [];

const producto = {
  nombre: "Monitor",
  precio: 200,
};

const producto2 = {
  nombre: "Telefono",
  precio: 500,
};

const producto3 = {
  nombre: "Tablet",
  precio: 400,
};

const producto4 = {
  nombre: "audifonos",
  precio: 500,
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

//eliminar el ultimo elemento de el array

// carrito.pop();

//eliminar el primero
// carrito.shift();

//eliminar uno de "en medio" variable.splice(donde empieza, cuantos quita)

carrito.splice(1, 1);

console.table(carrito);
