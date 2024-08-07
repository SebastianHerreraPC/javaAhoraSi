//concatenar arrays

const producto = 'Monitor de 21"';
const precio = "40 USD ";

console.log(producto);
console.log(producto.concat(" En descuento"));

console.log(producto + " " + precio);

//template stings plantillas literales con ${``}
console.log(`El producto ${producto} tiene un precio de ${precio}`);

//¿Que pasa si tiene espacios en blanco?

const producto1 = "        Monitores        ";
console.log(producto1);
console.log(producto1.length);
console.log(producto1.trimStart()); //para eliminar los espacios al inicio
console.log(producto1.trimEnd()); //para eliminar los espacios al final
console.log(producto1.trim()); //para eliminar los espacios de inicio y final
console.log(producto1.trimStart().trimEnd()); //para eliminar los espacios de inicio y final
