//import { resetDefaultConfig } from 'eslint/lib/rule-tester/rule-tester';
import { filterData, orderBy, searchData, topStats} from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const pokemones = data.pokemon;

const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const btnStart = document.getElementById('btnStart');
const selectBtn = document.querySelectorAll('.optionsPokType');
const pokeAll = document.getElementById("pokeAll");
const orderBySelect = document.querySelector('.orderBySelect');

	// aparezca la segunda pantalla
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
    <div class="statsReverseCard">
      <p id="baseAttack">${prop["base-attack"]}</p>
      <p id="baseDefense">${prop["base-defense"]}</p>
      <p id="baseStamina">${prop["base-stamina"]}</p>
      <p id="maxCp">${prop["max-cp"]}</p>
      <p id="maxHp">${prop["max-hp"]}</p>
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
 
// ordenando 
orderBySelect.addEventListener('change', function (e){
  const clickSelected = e.target.value
  container.innerHTML="";
  pokemonFeatures(orderBy(pokemones,clickSelected))
})

//estadísticos
const statsBtn = document.getElementById("statsBtn");
const optionsType = document.querySelector(".optionsType");
const blockContentStat = document.querySelector(".blockContentStat");
const sideBar = document.querySelector(".sideBar")
const reverseCard1= document.querySelector(".reverseCard1");
const statsReverseCard = document.querySelector(".statsReverseCard");
statsBtn.addEventListener("click", (e) =>{
  orderBySelect.style.display = "none";
  optionsType.style.display = "none"
  blockContentStat.style.display = 'block';



  //reverseCard1.style.display = "none";
  //container.classList.remove('statsReverseCard')
  //pokemonCard.classList.add("")
  //statsReverseCard
  //container.classList.remove("reverseCard1");
  //container.classList.replace("reverseCard1", "statsReverseCard")

});

// Filtrando según el Estadístico
const statOptions = document.querySelectorAll(".statOptions")
statOptions.forEach((e)=>{
  e.addEventListener("click", (event) => { 
    const clickStat = event.target.id
    pokemonFeatures(topStats(pokemones, clickStat))    
  })
})











//estadísticos suma
/*
const pokemonStats = pokemones.map(function (event){
  const baseAttack = event.stats;
  const baseDefense = event.stats["base-defense"];
  const baseStamina = event.stats["base-stamina"]; 
  const maxCp = event.stats["max-cp"]; 
  const maxHp = event.stats["max-hp"]; 

  //newArrayStats = baseAttack 
  const statKeys = Object.keys(event.stats)
  //console.log(statValues)
  //console.log(statKeys)
//buscando hacer un const de solo los estadís
  let entrsPok = Object.entries(event)
  const entriesStats = entrsPok[10][1]
  //console.log(entriesStats)
 //sumar los estadísticos de cada pokemon
 const statValues = Object.values(entriesStats)
 console.log(statValues) //esto muestra los val de base-defense
 //let statVa_ = newArray.sort((a, b) => b-a)
 //console.log(newArray)
})
*/
//creando una función que reconozca que los array deben de estar en objetos
/*
function sum(property){
  property.reduce((a,n) => (a += n, a),0)
} */











