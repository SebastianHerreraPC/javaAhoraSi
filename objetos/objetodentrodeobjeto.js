const producto = {
  nombre: 'Monitor de 20"',
  precio: 200,
  disponibilidad: true,
  caracteristicas: {
    peso: "2kg",
    medidas: {
      alto: "30 cm",
      ancho: "50cm",
    },
  },
};

console.log(producto);
//para acceder a los objetos dentro de objetos es igual que acceder a uno

console.log(producto.caracteristicas);
console.log(producto.caracteristicas.peso);
console.log(producto.caracteristicas.medidas.alto);

// para destructurar objetos dentro de objetos haremos:

const { nombre } = producto;
console.log(nombre);
//si hago esto me crea la variable pero con l
const { caracteristicas } = producto;
console.log(caracteristicas);
//entonces lo pongo con ":{}"

const {
  caracteristicas: { medidas },
} = producto;
console.log(medidas);
//para profundisar mas puedo

const {
  caracteristicas: {
    medidas: { alto },
  },
} = producto;

console.log(alto);
