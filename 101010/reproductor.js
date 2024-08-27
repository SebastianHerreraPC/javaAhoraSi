//selecciono el contenedor que voy a usar como variable y por clase
let container = document.querySelector(".container");
//selecciono el contenedor donde se van a agregar las canciones, lo hare mediente el elemento container en lugar de todo el elemento
let songsContainer = container.querySelector(".songs-container");
//selecciono todas las canciones de el contenerdor de songsContainer
// let songs = songsContainer.querySelectorAll(".song");
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

// if (songs.length === 0) {
//   resetButton.setAttribute("disabled", true);
//   resetButton.classList.add("form__submit-btn_disabled");
// } else {
//   resetButton.removeAttribute("disabled");
//   resetButton.classList.remove("form__submit-btn_disabled");
// }
//el boton de reset sigue apagado y es por que if solo se ejecuta una ves al inicio del codigo, lo que se tiene que hacer para que se ejecute
//varias veces es simplemente hacerlo una funcion (es la de la linea 22 que esta comentada pero esa se pasa a funcion) para que songs almacene las canciones que se añadan
//tiene que estar dentro de renderAdded() para que llame a la variable cada vez que se declare la funcion

function renderAdded() {
  let songs = songsContainer.querySelectorAll(".song");
  let noSongsElement = container.querySelector(".no-songs");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.style.backgroundColor = "#f1f1f1";
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("form__submit-btn_disabled");
    resetButton.style.backgroundColor = "#ffdb4d";
    noSongsElement.classList.add("no-songs_hidden");
  }
}

//innerHTML y textContent
//añadire un bloque de codigo a el elemento de songs-container para innerHTMl no se usan parentesis sino =
//aun que se llame varias veces reemplaza el contenido y solo se pone una vez, entonces para hacer que no se eliminen las otras canciones solo se añade un
//operador de codigo en la guncion, en este caso sera el +=
function addSong() {
  let artist = document.querySelector(".input__text_type_artist");
  let song = document.querySelector(".input__text_type_song");
  songsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="song">
    <h4 class="song__artist">${artist.value}</h4>
    <p class="song__title">${song.value}</p>
    <button class="song__like"></button>
    </div>`
  );
  artist.value = "";
  song.value = "";
  renderAdded();
}
renderAdded();

// EVENTOS Y REACCIONES
// nombreVariable.addEventListener('lo que hace el usuario', lo que va a pasar o la funcion a la que va a llamar)
//en este caso aun que se llame a la funcion se le pasa como referencia y no como resultado es decir en lugar de: nombreFuncion() solo poner nombreFuncion;

addButton.addEventListener("click", addSong);
//la inscripcion de no hay canciones sigue ahi y debe desaparecer cuando ya haya canciones entonces se agrega con el classList.add() o el .remove, ve a la linea 33 de la funcion
//InsertAdjacentHTML e insertAdjacentText nos permiten añadir nuevos elementos o texto al codigo sin perder los elementos anterirores.
//se reemplazo el innerHTML por insertAdjacentHTML

console.log(artist, song);
