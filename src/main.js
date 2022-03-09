import { filterData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let pokemones = data.pokemon;


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
      <p id="pokemonWeight">${prop.size.weight}</p>
      <p id="pokemonWeaknesses">${prop.weaknesses}</p>
      <p id="pokemonWeaknesses">${prop.resistant}</p>
      <p id="pokemonWeaknesses">${prop["pokemon-rarity"]}</p>
    </div>
  </div> `
    
    
  //rotar las imágenes
  const pokemonCard = document.querySelectorAll(".pokemonCard");
  pokemonCard.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('active')
  })
})
}) 
}

pokemonFeatures(pokemones)

// Filtrando según el tipo de pokémon
const selectBtn = document.querySelectorAll('.optionsPokType');
//console.log(selectBtn)
selectBtn.forEach((e)=>{
  //console.log(e)
  e.addEventListener("click", (event) => { 
      const clickType = event.target.id
      //console.log(clickType)
      container.innerHTML=""
      pokemonFeatures(filterData(pokemones,"type",clickType))
    
  })
})