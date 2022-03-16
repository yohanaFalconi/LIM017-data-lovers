//import { resetDefaultConfig } from 'eslint/lib/rule-tester/rule-tester';
import { filterData, orderBy, searchData, topStats} from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

{/* <p id="pokemonResistant">
              <strong class="pokeFeatTitle">RESISTENCIA</strong>
              <span class="pokeFeat">${prop.resistant}</span>
          </p> */}
const pokemones = data.pokemon;

const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const btnStart = document.getElementById('btnStart');
const selectBtn = document.querySelectorAll('.optionsPokType');
const pokeAll = document.getElementById("pokeAll");
const sideBar = document.querySelector(".sideBar");
const optionsType = document.querySelector(".optionsType");
const blockContentStat = document.querySelector(".blockContentStat");
const orderBySelect = document.querySelector('.orderBySelect');
const pokeEvolution = document.getElementById("pokeEvolution");
	// aparezca la segunda pantalla
 btnStart.addEventListener('click', screenAppear);
  function screenAppear(){
    firstScreen.style.display = 'none';
    secondScreen.style.display ='block';

  }
  
 //botón de atrás: Back Arrow

const backArrow = document.getElementById("backArrow");
backArrow.addEventListener("click",()=>{
   firstScreen.style.display = 'block';
   secondScreen.style.display = 'none';
   pokeEvolution.checked = false;
   pokemonFeatures(pokemones,false);
}) 

  //botón de recargar la página todos los pokemones, sin filtros
  const home = document.getElementById("home");
  home.addEventListener('click', () =>{
    pokemonFeatures(pokemones,false);
    sideBar.classList.add("hide");
    orderBySelect.style.display="block";
    pokeEvolution.checked=false;
  })


  //Funcionamiento del botón pokeAll y aparición de tipos
  pokeAll.addEventListener('click',()=>{
    pokemonFeatures(pokemones,false);
    sideBar.classList.remove("hide");
    optionsType.classList.remove("hide");
    blockContentStat.classList.add("hide");
  })

  
// MÉTODO MAPS
const container = document.querySelector(".container");
const containerModal = document.querySelector("#containerModal");
//const statsBtn = document.getElementById("statsBtn");
  
const pokemonFeatures = (data, isCheck)=>{
  container.innerHTML  = ""
  data.map( (prop)  => {
    const sectionElement = document.createElement("div");
    sectionElement.setAttribute("class","sectionCardPoke");
    sectionElement.innerHTML += `
    
      <div class="pokemonCard">
      
        <div class = "frontCard">    
          <img id="imgPok"src=${prop.img}>
          <p id="pokemonName">${prop.name}</p>      
          <p id="pokemonNumber">${prop.num}</p>
          <div class= "candyImg hide ">
            <img src="./img/candy.png" id="candyEvolution">
          </div>
        </div>
        <div class = "reverseCard1">
          <p id="pokemonType">
              <strong class="pokeFeatTitle">TIPO</strong>
              <span class="pokeFeat">${prop.type}</span>
          </p>
          <p id="pokemonRegion">
              <strong class="pokeFeatTitle">REGIÓN</strong>
              <span class="pokeFeat">${prop.generation.name}</span>
          </p>
          <p id="titleSizeType"><strong> MEDIDAS </strong></p>
          <div class="sizeType">          
            <p class="pokemonHeight">${prop.size.height}</p>
            <p class="pokemonWeight">${prop.size.weight}</p>
          </div>
          <p id="pokemonWeaknesses">
              <strong class="pokeFeatTitle">DEBILIDAD</strong>
              <span class="pokeFeat">${prop.weaknesses}</span>
          </p>
          
          <p id="pokemonRarity">
              <strong class="pokeFeatTitle">RAREZA-POKEMÓN</strong>
              <span class="pokeFeat">${prop["pokemon-rarity"]}</span>
          </p>
        </div>
        <div class="statsReverseCard hide">
          <p id="baseAttack">${prop["base-attack"]}</p>
          <p id="baseDefense">${prop["base-defense"]}</p>
          <p id="baseStamina">${prop["base-stamina"]}</p>
          <p id="maxCp">${prop["max-cp"]}</p>
          <p id="maxHp">${prop["max-hp"]}</p>
        </div>
      </div>
    `
    
  const pokemonCard = sectionElement.querySelectorAll(".pokemonCard")
  //rotar las imágenes
  if(isCheck === false){
    pokemonCard.forEach((elem) => {
      elem.addEventListener('click', () => {    
        elem.classList.toggle('active');
      })
    })
  }


//   //cambio del reverso de Información
// const statsReverseCard = sectionElement.querySelectorAll(".statsReverseCard");
// const reverseCard1 = sectionElement.querySelectorAll(".reverseCard1");

//   statsBtn.addEventListener("click", () => {
//     pokemonCard.forEach(() => {
//       reverseCard1.classList.add('.hide');
//       statsReverseCard.classList.remove('.hide');

//     })
//   })
   



  const candyImg = (isCheck) ? sectionElement.querySelector(".candyImg"): "";
  //console.log(candyImg)
    if(isCheck === true){
      candyImg.classList.remove("hide")
    }
   
    candyImg && candyImg.addEventListener('click', () => {

      containerModal.classList.remove('ocultar');
      containerModal.classList.add('mostrar');
      containerModal.appendChild(moreInformation(prop));

      containerModal.querySelector('#exit').addEventListener('click', () => {
        containerModal.classList.remove('mostrar');
        containerModal.classList.add('ocultar');
        containerModal.innerHTML = '';
    
      });    
    });   
    container.appendChild(sectionElement)
    
 }) 
}

 pokemonFeatures(pokemones,false)

// Filtrando según el tipo de pokémon
selectBtn.forEach((e)=>{
  e.addEventListener("click", (event) => { 
    const clickType = event.target.id
    pokemonFeatures(filterData(pokemones,"type",clickType),false)    
  })
})

//Función buscar
const inputPokeSearch = document.getElementById("inputPokeSearch");
inputPokeSearch.addEventListener('keyup',()=>{
  const textSearch = inputPokeSearch.value.toLowerCase();
  
  pokemonFeatures(searchData(pokemones,"name",textSearch),false);

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
    </div>
    `
  //--botón tryAgain cuando hay error de búsqueda
  const figTryAgain = document.querySelector('.figTryAgain');
  figTryAgain.addEventListener('click', ()=> {
  pokemonFeatures(pokemones, false);
  }) 
  }
});
 
// ordenando 
orderBySelect.addEventListener('change', function (e){
  const clickSelected = e.target.value
  container.innerHTML="";
  pokemonFeatures(orderBy(pokemones,clickSelected),false)
})

//Modal
pokeEvolution.addEventListener('change', () => {
  container.innerHTML = ''
  if(pokeEvolution.checked){
    //console.log('está activado')
    pokemonFeatures(pokemones, true)
  } 
  else {
    pokemonFeatures(pokemones, false)
    //console.log('no está activado')
  }
})

// Función para mostrar imágenes de evolución
const pokeEvolutionImage = (poke, cardContainer) => {
  cardContainer.innerHTML = '';
  const prev = (poke.evolution['prev-evolution']) ? (poke.evolution['prev-evolution']) : [];
  const next = (poke.evolution['next-evolution']) ? (poke.evolution['next-evolution']) : [];
  let divCardContainer =''; 
  let pokemn=[];

  if(prev.length !== 0){
    for(let i=0; i< prev.length ; i++){
      pokemn = pokemones.find(pk => pk.name === prev[i].name);      
      divCardContainer = document.createElement('div');
      divCardContainer.className = 'cardPokemonEvolution';
      divCardContainer.innerHTML = `<span  class="namePokeEvol">${prev[i].name}</span>
                                    <img src="${pokemn.img}" alt="" class="imagePokeModal">
                                    <div class="candyCost"9>
                                        <p class="qtyCandy">${prev[i]["candy-cost"]} </p> 
                                        <img src="./img/candyCost.png" class="candy">
                                    </div>
                                    
                                `;
      cardContainer.append(divCardContainer);

      if(prev[i]['prev-evolution']){
        
        for(let j=0; j< prev[i]['prev-evolution'].length; j++){
          pokemn = pokemones.find(pk => pk.name === prev[i]['prev-evolution'][j].name);      
          
          divCardContainer = document.createElement('div');
          divCardContainer.className = 'cardPokemonEvolution';
          divCardContainer.innerHTML = `<span  class="namePokeEvol">${prev[i]['prev-evolution'][j].name}</span>
                                        <img src="${pokemn.img}" alt="" class="imagePokeModal">
                                        <div class="candyCost">
                                            <p class="qtyCandy">${prev[i]['prev-evolution'][j]["candy-cost"]} </p>
                                            <img src="./img/candyCost.png" class="candy">
                                        </div>
                                         
                                `;
          cardContainer.append(divCardContainer);
        }
      }
    }
  }
  

  if(next.length !== 0){
    for(let i=0; i< next.length ; i++){
      pokemn = pokemones.find(pk => pk.name === next[i].name);      
      divCardContainer = document.createElement('div');
      divCardContainer.className = 'cardPokemonEvolution';
      divCardContainer.innerHTML = `<span class="namePokeEvol">${next[i].name}</span>
                                    <img src="${pokemn.img}" alt="" class="imagePokeModal">
                                    <div class="candyCost">
                                      <p class="qtyCandy">${next[i]["candy-cost"]} </p>
                                      <img src="./img/candyCost.png" class="candy">
                                    </div>
                                     
                                `;
      cardContainer.append(divCardContainer);

      if(next[i]['next-evolution']){
        
        for(let j=0; j< next[i]['next-evolution'].length; j++){
          pokemn = pokemones.find(pk => pk.name === next[i]['next-evolution'][j].name);      
      
          divCardContainer = document.createElement('div');
          divCardContainer.className = 'cardPokemonEvolution';
          divCardContainer.innerHTML = `<span class="namePokeEvol">${next[i]['next-evolution'][j].name}</span>
                                        <img src="${pokemn.img}" alt="" class="imageModal">
                                        <div class="candyCost">
                                            <p class="qtyCandy">${next[i]['next-evolution'][j]["candy-cost"]} </p>
                                            <img src="./img/candyCost.png" class="candy">
                                        </div>
                                `;
          cardContainer.append(divCardContainer);
        }
      }
      
    }
  }
  if(next.length===0 & prev.length===0){
      divCardContainer = document.createElement('div');
      divCardContainer.className = 'cardPokemonEvolution';
      divCardContainer.innerHTML = `<p id="noEvolution">No hay evoluciones</p>`;
      cardContainer.append(divCardContainer);
  }
  
} 

 const moreInformation = (dataEvol) => {
    containerModal.innerHTML = '';
    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'dataEvolution');
    const info = `
      <i class="fas fa-times" id="exit">X</i>
      <p id="namePokeEvol">${dataEvol.name}</p>  
      <p id="typePokeEvol">${dataEvol.type}</p>
      <p id="sizes">Medidas</p>
      <table class="tableEvol">
        <tr>
            <th scope="col" class="titleHeight">Altura</th>
            <th scope="col" class="titleWeight">Peso</th>
        </tr> 
        <tr>
            <td class="dataSize">
              <span>${dataEvol.size.height}</span>
              <img src="./img/altura.png" id="imgHeight">
            </td>
            <td class="dataSize">
              <span>${dataEvol.size.weight}</span>
              <img src="./img/peso.png" id="imgWeight">
            </td>
         </tr>
      </table>
      <h2 id="evolutionsTitle">Evoluciones</h2> 
      <div id="sectionImgEvolution"> 
        
      </div>
      `
    
  //pokeEvolutionImage(pokemones,evolutions,pokemones.evolution['pre-evolution'],pokemones.evolution['next-evolution'])
  divInfo.innerHTML = info;
  const evolutions= divInfo.querySelector("#sectionImgEvolution")
  pokeEvolutionImage(dataEvol,evolutions)
  //console.log(evolutions)
  return divInfo;
}
 
//estadísticos
const statsBtn = document.getElementById("statsBtn");

statsBtn.addEventListener("click", () =>{
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
    pokemonFeatures(topStats(pokemones, clickStat, 10))    
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


