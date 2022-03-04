import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
let pokemones = data.pokemon;

// MÉTODO MAPS: Carácterísticas de la HU1
const container= document.querySelector(".container");
let pokemonFeatures= pokemones.map(function (prop){
  let name = prop.name //retorna todos los nombres
  container.innerHTML += `
  <div class="pokemonCard">
    <div>    
      <img src=${prop.img}>
    </div>
    <p class="pokemonNumber">${prop.num}</p>
    <p class="pokemonName">${prop.name}</p>
    <p class="pokemonAbout">${prop.about}</p>
    <p class="pokemonType">${prop.type}</p>
    <p class="pokemonRegion">${prop.generation.name}</p>

    <p class="pokemonHeight">${prop.size.height}</p>
    <p class="pokemonWeight">${prop.size.weight}</p>
    <p class="pokemonWeaknesses">${prop.weaknesses}</p>
  </div> `
}) 





