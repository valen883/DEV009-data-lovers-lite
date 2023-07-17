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
      <p class="name">${personaje.name}</p>
      <a class="species">${personaje.species}</a>
      <a class="status">${personaje.status}</a>
    </div>
  </div>`
  console.log(personaje);
} 
dataTarjetas.innerHTML = todos;
     
//tu código que tenga que ver con mostrar los datos en la pantalla.
//Con esto nos referimos básicamente a la interacción con el DOM.

const fCap = document.getElementById('esp');
fCap.addEventListener("click", function(){
    document.getElementById("especie").style.display = "flex"
    document.getElementById("principal").style.display ="none"
    document.getElementById("estado").style.display = "none"
    document.getElementById("locacion").style.display = "none"
})

const fLoct = document.getElementById('loct');
fLoct.addEventListener("click", function(){
  document.getElementById("locacion").style.display = "flex"
  document.getElementById("principal").style.display ="none"
  document.getElementById("estado").style.display = "none"
  document.getElementById("especie").style.display = "none"
})

const fall = document.getElementById('stat');
fall.addEventListener("click", function(){
  document.getElementById("estado").style.display = "flex"
  document.getElementById("principal").style.display ="none"
  document.getElementById("locacion").style.display = "none"
  document.getElementById("especie").style.display = "none"
})