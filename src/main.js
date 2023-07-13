import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';

//tu código que tenga que ver con mostrar los datos en la pantalla.
// Con esto nos referimos básicamente a la interacción con el DOM. 
//console.log(example, data);

const fCap = document.getElementById('cap');
fCap.addEventListener("click", function(){
    console.log("si");
})

const fLoct = document.getElementById('loct');
fLoct.addEventListener("click", function(){
    console.log("yass");
})

const fall = document.getElementById('allP');
fall.addEventListener("click", function(){
    console.log("obvi");
})