const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
  mostrarInfo: function () {
    console.log(`el  ${this.nombre} tiene un precio de ${this.precio}`);
  },
};

const producto2 = {
  nombre: "tablet",
  precio: 400,
  disponible: true,
  mostrarInfo: function () {
    console.log(`el  ${this.nombre} tiene un precio de ${this.precio}`);
  },
};

producto.mostrarInfo();
producto2.mostrarInfo();
