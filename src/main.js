import { familiaSanchez } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
//seleccionar la calse cardWrapper, guardar carWrapper en una constante dataTarjetas
const dataTarjetas = document.querySelector("cardWrapper");
const princ = familiaSanchez(data.results);

for(i = 0; i>=princ; i++) {
// a dataTarjetas hacerle un dataTarjetas.innerHTML += string con index.html en card
  const i = dataTarjetas.innerHTML += ("cardWrapper");
}

//tu código que tenga que ver con mostrar los datos en la pantalla.
//Con esto nos referimos básicamente a la interacción con el DOM.

const fCap = document.getElementById('cap');
fCap.addEventListener("click", function(){
    console.log("si");
    document.getElementById("capitulo").style.display = "flex"
    document.getElementById("protagonistas").style.display ="none"
    document.getElementById("todoslospersonajes").style.display = "none"
})

const fLoct = document.getElementById('loct');
fLoct.addEventListener("click", function(){
    console.log("yass");
})

const fall = document.getElementById('allP');
fall.addEventListener("click", function(){
    console.log("obvi");
})