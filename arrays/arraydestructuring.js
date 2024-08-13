const producto = {
  nombre: "monitor",
  precio: 200,
  disponible: true,
};

const { disponible } = producto;

console.log(disponible);

//distructuring con arrays

const numeros = [10, 20, 30, 40, 50];
const [, , c] = numeros;
console.log(c);
