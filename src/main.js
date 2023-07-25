import { especieF, orderData, filterData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';

const filters = {
  species: [],
};
const sorting = {
  field: "popularity",
};

function pintarCards(personajes, campos = ["name", "species", "status", "type", "gender"]) {
  let cards = "";
  personajes = filterData(personajes, filters)
  personajes = orderData(personajes, sorting)
  for (const personaje of personajes) {
    let contenidoCards = "";
    for (const campo of campos) {
      contenidoCards += `<a>${personaje[campo]}</a>
      `    }
    cards += `<div class="card">
  <div class="imageContent">
    <span class="overlay"></span>
    <div class="cardImage">
    <img src="${personaje.image}" alt="" class="cardImg">
    </div>
    </div>
    <div class="cardContent">
    ${contenidoCards}
    </div>
    </div>`

  }
  const cardsCharacters = document.getElementById("characters");
  cardsCharacters.innerHTML = cards;
  return cards
}

pintarCards(data.results);

const fSpecie = document.getElementById('esp');
fSpecie.addEventListener("click", function () {
  //crear boton
  const botonSoloHumanos = document.createElement("button")
  botonSoloHumanos.addEventListener("click", () => {
    const spc = especieF(data.results);
    //console.log(spc);
    pintarCards(spc);
  })
})

const ordenar = document.getElementById("sorting");

ordenar.addEventListener("change", function () {
  sorting.field = ordenar.value
  pintarCards(data.results)
});


// Select all checkboxes with the name 'settings' using querySelectorAll.
const checkboxes = document.querySelectorAll("input[type=checkbox][name=species]");

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    filters.species =
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
    pintarCards(data.results);
  })
});