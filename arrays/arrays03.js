const meses = ["Enero", "Febrero", "Marzo", "Junio", "Julio", "Agosto"];

console.table(meses);
//conocer cuanto mide el array
console.log(meses.length);

//recorrer el arreglo con iterador

/*
for(valor donde va a empezar,cuantas veces se va a iterar,de cuanto en cuanto se va a iterar){


}




*/

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
