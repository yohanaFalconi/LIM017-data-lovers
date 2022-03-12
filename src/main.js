//import { resetDefaultConfig } from 'eslint/lib/rule-tester/rule-tester';
import { filterData, orderBy, searchData } from './data.js';

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
const container = document.querySelector(".container");
const containerModal = document.querySelector(".containerModal");
//const sectionElement = document.createElement("section");
const pokeEvolution = document.getElementById("pokeEvolution");
//const pokemonCard = document.querySelectorAll(".pokemonCard");


  
const pokemonFeatures = (data, isCheck)=>{
  container.innerHTML  = ""
  //sectionElement.innerHTML="";
  data.map( (prop)  => {
    const sectionElement = document.createElement("div");
    sectionElement.setAttribute("class","sectionCardPoke");
  //container.innerHTML  +=
  sectionElement.innerHTML += `
    
  <div class="pokemonCard">
    <div class = "frontCard">    
      <img id="imgPok"src=${prop.img}>
      <p id="pokemonName">${prop.name}</p>      
      <p id="pokemonNumber">${prop.num}</p>
      <div class= "candyImg hidden ">
          <img src="./img/candy.png" id="candyEvolution">
      </div>
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
    
 const pokemonCard = document.querySelectorAll(".pokemonCard");
  
  //rotar las imágenes
  pokemonCard.forEach((elem) => {
  elem.addEventListener('click', () => {    
    if(!pokeEvolution.checked){
    elem.classList.toggle('active');
    }
  })
  })

  const candyImg = (isCheck) ? sectionElement.querySelector(".candyImg"): "";

  //console.log(candyImg)
    if(isCheck === true){
      candyImg.classList.remove("hidden")
    }
   
    candyImg && candyImg.addEventListener('click', () => {
      //console.log('Aquí irá lo del modal')
      const containerModal = document.querySelector('.containerModal');
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

 //Modal

 pokeEvolution.addEventListener('change', () => {
  container.innerHTML = ''
  if(pokeEvolution.checked){
    //console.log('está activado')
    pokemonFeatures(data, true)
  } else {
    pokemonFeatures(data, false)
    //console.log('no está activado')
  }
})

const moreInformation = (dataEvol) => {
  containerModal.innerHTML = '';
  const divInfo = document.createElement('div');
  divInfo.setAttribute('class', 'dataEvolution');
  const info = `
  <i class="fas fa-times" id="exit">X</i>
  <p>${dataEvol.name}</p>
`
divInfo.innerHTML = info;

return divInfo;
}




// Filtrando según el tipo de pokémon
selectBtn.forEach((e)=>{
  e.addEventListener("click", (event) => { 
    const clickType = event.target.id
    //container.innerHTML=""
    pokemonFeatures(filterData(pokemones,"type",clickType),false)    
  })
})

//Funcionamiento del botón pokeAll
pokeAll.addEventListener('click',()=>{
  pokemonFeatures(pokemones,false);
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
    </div>`
  }
//--botón tryAgain cuando hay error de búsqueda
  const figTryAgain = document.querySelector('.figTryAgain');
  figTryAgain.addEventListener('click', ()=> {
  pokemonFeatures(pokemones, false);
    })
});
 
// ordenando 
orderBySelect.addEventListener('change', function (e){
  const clickSelected = e.target.value
  container.innerHTML="";
  pokemonFeatures(orderBy(pokemones,clickSelected),false)
})