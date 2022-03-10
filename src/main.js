//import { resetDefaultConfig } from 'eslint/lib/rule-tester/rule-tester';
import { filterData, searchData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const pokemones = data.pokemon;

	// aparezca la segunda pantalla
  const firstScreen = document.querySelector('.firstScreen');
  const secondScreen = document.querySelector('.secondScreen');
  const btnStart = document.getElementById('btnStart');

  btnStart.addEventListener('click', screenAppear);
  function screenAppear(){
    firstScreen.style.display = 'none';
    secondScreen.style.display ='block';
    
  }
  
 //botón de home
 const home = document.getElementById("home");
 home.addEventListener("click",()=>{
    firstScreen.style.display = 'block';
    secondScreen.style.display = 'none';
 }) 

// MÉTODO MAPS
const container= document.querySelector(".container");
const pokemonFeatures = (data)=>{
  container.innerHTML="";
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
selectBtn.forEach((e)=>{
  e.addEventListener("click", (event) => { 
      const clickType = event.target.id
      pokemonFeatures(filterData(pokemones,"type",clickType))
    
  })
})

//Funcionamiento del botón pokeAll
const pokeAll = document.getElementById("pokeAll");
pokeAll.addEventListener('click',()=>{
  pokemonFeatures(pokemones);
})

//Función buscar
const inputPokeSearch = document.getElementById("inputPokeSearch");
inputPokeSearch.addEventListener('keyup',()=>{
  const textSearch = inputPokeSearch.value.toLowerCase();
  
  pokemonFeatures(searchData(pokemones,"name",textSearch));

  if(container.innerHTML === ''){
  
    container.innerHTML =`
    <div class="errorSearch">
        <img src="./img/errores.png" id="error">
        <p>UPS!...</p>
        <p>El nombre ingresado no es correcto</p>
        <figure class="figTryAgain">
          <img src="./img/reloading.png" id="tryAgain">
          <figcaption>Intenta de nuevo</figcaption>
        </figure>  
    </div>`
  }
//--botón tryAgain cuando hay error de búsqueda
  const figTryAgain = document.querySelector('.figTryAgain');
  figTryAgain.addEventListener('click',()=>{
  pokemonFeatures(pokemones);
  })


});
 