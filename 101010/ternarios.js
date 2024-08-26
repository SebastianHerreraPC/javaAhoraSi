//el operador ternario es como el if else y se componoe:
//(condicion)? verdadero: falso
let edad = 18;
let eresMayor = edad <= 18 ? "eres mayor" : "eres menor";
//switch-case sirve cuando tenemos que evaluar diferentes valores para una misma variable

let dia = 2;
switch (key) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("Opps, se acabaron los dias ");
    break;
}
