import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


let pokemones = data.pokemon;
for(let prop in pokemones.data){
    console.log(prop["name"])
    const text = document.getElementsByClassName("text");
    text.innerHTML=
        `<div>
           <p>Este es el primer pokemón</p>
           <img src="${pokemones[2].img}">
        </div>`
}


// console.log(pokemones[0]["type"]);
// console.log(pokemones.length)
// console.log(`nombre del primer pokemon es ${pokemones[0]["name"]}`)

// for (let i=0; i < pokemones.length; i++ ){
    //console.log(pokemones[i]["name"]
    //console.log(`nombre de los 5 primeros pokemon es ${pokemones[i]["name"]}`)
    //console.log(helloMessage.innerHTML= `la lista de nombres de pokemones son: ${pokemones[0]["name"]} `)
    /*helloMessage.innerHTML=
        `<div>
           <p>Este es el primer pokemón</p>
           <img src="${pokemones[0].img}">
        </div>`*/
// }
/*var mappedNames = pokemones.map(function (prop){
    value :
    console.log(prop.name)
})*/

/*
var items = [
    { name: 'Edward', valu: 21 },
    { name: 'Sharpe', valu: 37 },
    { name: 'And', valu: 45 },
    { name: 'The', valu: -12 },
];
//recorre todo el objeto
let toArray = Object.entries(items)
toArray = items.forEach(function(e){
    console.log(e)
    console.log(e.valu) // solo values con obj
})*/