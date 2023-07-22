import { especieF} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';

const dataTarjetas = document.querySelector(".cardWrapper");
const spc = especieF(data.results);
dataTarjetas.innerHTML = "";
let todos = "";
let especie1 = "";


function pintarCards(personajes){
  let cards="";
  for ( let personaje of personajes) {
  cards+= `<div class="card">
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
  } 
  return cards
    } 
  
  todos = pintarCards(data.results);
  const divTodos = document.createElement("div");
  divTodos.innerHTML = todos;
  document.getElementById("principal").appendChild(divTodos);

  const fSpecie = document.getElementById('esp');
  fSpecie.addEventListener("click", function(){
    document.getElementById("especie").style.display = "flex"
    document.getElementById("principal").style.display ="none"
    document.getElementById("ordenar").style.display = "none"
    document.getElementById("especie").innerHTML =""; //limpiar lo que haya antes
    //crear boton
    const botonSoloHumanos = document.createElement("button")
    botonSoloHumanos.innerText = "Filtrar solo humanos";
    document.getElementById("especie").appendChild(botonSoloHumanos);
    //crear tarjetas
    const crearTarjetas = document.createElement("div");
    document.getElementById("especie").appendChild(crearTarjetas);
    //filtrar por boton
    botonSoloHumanos.addEventListener("click", () =>{
      console.log("click");
      //crearTarjetas.innerHTML = especie1; //.todos -> nueva variable
      console.log(spc); //crearTarjetas.innerHTML = "variabe"
      for ( let filter1 of spc) {
        //pintar el html con las cards con los filtros de la funciòn en data
            especie1 +=` <div class="card">
            <div class="imageContent">
              <span class="overlay"></span>
              <div class="cardImage">
                <img src="${filter1.image}" alt="" class="cardImg">
              </div>
            </div>
            <div class="cardContent">
            <a class="species">${filter1.species}</a>
            </div>
            </div>`
          } crearTarjetas.innerHTML = especie1;
          document.getElementById("especie").appendChild(crearTarjetas);
    })
  })
  
  //const crearTarjetas.innerHTML = "";
  const crearTarjetas = document.createElement("div");
  
  const fall = document.getElementById('allp');
  fall.addEventListener("click", function(){
  document.getElementById("principal").style.display = "flex"
  document.getElementById("ordenar").style.display = "none"
  document.getElementById("especie").style.display = "none"

  const ord = document.getElementById('ordenr');
ord.addEventListener("click", function(){
  document.getElementById("ordenar").style.display = "flex"
  document.getElementById("principal").style.display ="none"
  document.getElementById("especie").style.display = "none"
})
})