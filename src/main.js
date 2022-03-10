import { filterData, orderBy } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let pokemones = data.pokemon;

const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const btnStart = document.getElementById('btnStart');
const pokemonCard = document.querySelectorAll(".pokemonCard");
const selectBtn = document.querySelectorAll('.optionsPokType');
const pokeAll = document.getElementById("pokeAll");
const orderBySelect = document.querySelector('.orderBySelect');


// aparezca la segunda pantalla
btnStart.addEventListener('click', screenAppear);
function screenAppear(){
  firstScreen.style.display = 'none';
  secondScreen.style.display ='block';
}

// MÉTODO MAPS
let container= document.querySelector(".container");
let pokemonFeatures = (data)=>{
  data.map((prop) => {
  container.innerHTML += `
  <div class="pokemonCard">
    <div class = "frontCard">    
      <img id="imgPok"src=${prop.img}>
      <p id="pokemonName">${prop.name}</p>      
      <p id="pokemonNumber">${prop.num}</p>
    </div>
    <div class = "reverseCard1">
      <p id="pokemonAbout">${prop.about}</p>
      <p id="pokemonType">${prop.type}</p>
      <p id="pokemonRegion">${prop.generation.name}</p>
      <p id="pokemonHeight">${prop.size.height}</p>
      <p ipm d="pokemonWeight">${prop.size.weight}</p>
      <p id="pokemonWeaknesses">${prop.weaknesses}</p>
      <p id="pokemonWeaknesses">${prop.resistant}</p>
      <p id="pokemonWeaknesses">${prop["pokemon-rarity"]}</p>
    </div>
  </div> `
    
  const pokemonCard = document.querySelectorAll(".pokemonCard");
  //rotar las imágenes
  pokemonCard.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('active')
  })
})
}) 
}

pokemonFeatures(pokemones)

// Filtrando según el tipo de pokémon
selectBtn.forEach((e)=>{
  e.addEventListener("click", (event) => { 
    const clickType = event.target.id
    container.innerHTML=""
    pokemonFeatures(filterData(pokemones,"type",clickType))
    
  })
})

//Funcionamiento del botón pokeAll
pokeAll.addEventListener('click',()=>{
  container.innerHTML="";
  pokemonFeatures(pokemones);
})

// ordenando 
orderBySelect.addEventListener('change', function (e){
  const clickSelected = e.target.value
  container.innerHTML="";
  pokemonFeatures(orderBy(pokemones,clickSelected))
})

