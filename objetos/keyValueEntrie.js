const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
};
//metodo keys se usa a veces para ver los objetos vacios.
console.log(Object.keys(producto));

//values para saber los valores
console.log(Object.values(producto));

//te regresa todo en pares
console.log(Object.entries(producto));
