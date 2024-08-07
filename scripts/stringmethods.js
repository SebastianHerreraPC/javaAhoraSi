//¿Como remplazo textos en cadenas de texto?
const producto = "Monitor de 21 pulgadas";

console.log(producto);
//nombreDeVariable.replace('lo que se quiere cambiar','por los que se va a cambiar')
console.log(producto.replace(" pulgadas", '"'));

console.log(producto.replace("Monitor", "Monitor curvo"));
//extraer o cortar cadenas de texto nombreDeVariable.slice('indice de donde empezar', 'indice de donde terminar')
console.log(producto.slice(0, 10));

//alternativa a slice
console.log(producto.substring(0, 10));

//.repeat para repetir una cadena de texto
const texto = "Producto en promo ".repeat(3);
console.log(texto);
console.log(`${producto} ${texto}!!!`);

//split para  dividir

const actividad = "aprender js moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, programar, bailar, dormir, estudiar";
console.log(hobbies.split(","));
