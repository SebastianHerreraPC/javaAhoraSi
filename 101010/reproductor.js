//selecciono el contenedor que voy a usar como variable y por clase
let container = document.querySelector(".container");
//selecciono el contenedor donde se van a agregar las canciones, lo hare mediente el elemento container en lugar de todo el elemento
let songsContainer = container.querySelector(".songs-container");
//selecciono todas las canciones de el contenerdor de songsContainer
let songs = songsContainer.querySelectorAll(".song");
//selecciono los botones tanto de añadir como de reset

let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");

//le pongo estilos al boton para cuando no haya canciones asi:

// if (songs.length === 0) {
//   resetButton.setAttribute("disabled", true);
//   resetButton.style.backgroundColor = "#f1f1f1";
// }
//tambien se puede mediante classList
// nombreVariable.classList.add('nombre de la clase')
//tambien para cuando ya tengan canciones se les tiene que quitar esta clase, entonces se añade el else
if (songs.length === 0) {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("form__submit-btn_disabled");
} else {
  resetButton.removeAttribute("disabled");
  resetButton.classList.remove("form__submit-btn_disabled");
}
