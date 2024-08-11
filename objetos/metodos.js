//sellar objetos no te deja eliminar ni agregar pero si modificar el objeto

const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
};

// Object.seal(producto);
// producto.imagen = "imagen";

// console.log(producto);
// console.log(Object.isSealed(producto));

//unir dos objetos
const medidas = {
  peso: "1kg",
  medida: "50x30",
};

// console.log(producto, medidas);

//para unir se usa el assing
const productoCompleto = Object.assign(producto, medidas);

console.log(productoCompleto);

//el spread o rest se hace con : ( los ... quieren decir copia la variable) // ayuda a unir tambien los objetos

const resultado = { ...producto, ...medidas };
console.log(resultado);
