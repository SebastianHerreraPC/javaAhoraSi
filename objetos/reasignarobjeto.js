"use strict";

const producto = {
  nombre: 'Monitor de 10"',
  precio: 200,
  disponible: true,
};

//object methods con frezze
Object.freeze(producto);

//el objeto si se modifica
// producto.disponible = false;
// delete producto.precio;

//para "congelar el objeto" se usa el "use strict"

console.log(producto);
//esto ya no pasa con el use strict
// x = 20;
// console.log(x);

//para saber si esta congelado puedo :

console.log(Object.isFrozen(producto));
