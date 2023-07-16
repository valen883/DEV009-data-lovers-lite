import { familiaSanchez } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
//seleccionar la calse cardWrapper, guardar carWrapper en una constante dataTarjetas
const dataTarjetas = document.querySelector(".cardWrapper");
const princ = familiaSanchez(data.results);
dataTarjetas.innerHTML = "";
let todos = "";

for ( let personaje of data.results) {
// a dataTarjetas hacerle un dataTarjetas.innerHTML += string con index.html en card
    todos +=` <div class="card">
    <div class="imageContent">
      <span class="overlay"></span>
      <div class="cardImage">
        <img src="${personaje.image}" alt="" class="cardImg">
      </div>
    </div>
    <div class="cardContent">
      <h4 class="name">${personaje.name}</h4>
      <h4 class="species">${personaje.species}</h4>
      <h4 class="status">${personaje.status}</h4>
    </div>
  </div>`
  console.log(personaje);
} 
dataTarjetas.innerHTML = todos;
     
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