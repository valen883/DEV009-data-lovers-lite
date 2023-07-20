import { especieF, estadF } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
//seleccionar la calse cardWrapper, guardar carWrapper en una constante dataTarjetas
const dataTarjetas = document.querySelector(".cardWrapper");
//const princ = familiaSanchez(data.results);
const std = estadF(data.results);
const spc = especieF(data.results);
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
      <a class="status">${personaje.origin.name}</a> 
    </div>
  </div>`
  //console.log(personaje);
} 
dataTarjetas.innerHTML = todos;
     
//tu código que tenga que ver con mostrar los datos en la pantalla.
//Con esto nos referimos básicamente a la interacción con el DOM.

const fSpecie = document.getElementById('esp');
fSpecie.addEventListener("click", function(){
    document.getElementById("especie").style.display = "flex"
    document.getElementById("principal").style.display ="none"
    document.getElementById("estado").style.display = "none"
    document.getElementById("ordenar").style.display = "none"
    console.log(spc);
  })
   

const fstat = document.getElementById('stat');
fstat.addEventListener("click", function(){
  document.getElementById("estado").style.display = "flex"
  document.getElementById("principal").style.display ="none"
  document.getElementById("ordenar").style.display = "none"
  document.getElementById("especie").style.display = "none"
  console.log(std);  
})
  const fall = document.getElementById('allp');
fall.addEventListener("click", function(){
  document.getElementById("principal").style.display = "flex"
  document.getElementById("estado").style.display ="none"
  document.getElementById("ordenar").style.display = "none"
  document.getElementById("especie").style.display = "none"

  const ord = document.getElementById('ordenr');
ord.addEventListener("click", function(){
  document.getElementById("ordenar").style.display = "flex"
  document.getElementById("principal").style.display ="none"
  document.getElementById("estado").style.display = "none"
  document.getElementById("especie").style.display = "none"
})
})