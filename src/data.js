// estas funciones son de ejemplo

export const filterData  = (data, property, value) => {
  const type = data.filter(elem=> elem[property].includes(value))
  //console.log(type)
  return type
}

/*export const sortData = () => {
  return 'OMG';
};*/


export const searchData = (data,property,condition) =>{
  const searchPoke = data.filter(element => (element[property].indexOf(condition) !== -1))
  return searchPoke;
}

export function orderBy(data,clicked){
  let newArray = [...data];
  switch(clicked){
  case 'bottomNumber':
    newArray = newArray.sort((a, b) => a.num - b.num);
    break;
  case 'topNumber':
    newArray = newArray.sort((a, b) => b.num - a.num);
    break;
  case 'A_Z':
    newArray = newArray.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
    break;
  case 'Z_A':
    newArray = newArray.sort((a, b) => ((a.name >= b.name) ? -1 : 1));
    break;
  default:
    // do nothing
  }
  return newArray; 
}

// funcion para top10 segun puntos de combate
export const topStats = (data, click) => {
  let topTenPokemon = [];
  switch(click) {
    case 'base-attack':
      topTenPokemon = data.sort((a, b) => (parseInt(b.stats['base-attack']) - parseInt(a.stats['base-attack']))).slice(0, 10);
      break;
    case 'base-defense':
      topTenPokemon = data.sort((a, b) => (parseInt(b.stats['base-defense']) - parseInt(a.stats['base-defense']))).slice(0, 10);
      break;
    case 'base-stamina':
      topTenPokemon = data.sort((a, b) => (parseInt(b.stats['base-stamina']) - parseInt(a.stats['base-stamina']))).slice(0, 10);
      break;
    case 'max-cp':
      topTenPokemon = data.sort((a, b) => (parseInt(b.stats['max-cp']) - parseInt(a.stats['max-cp']))).slice(0, 10);
      break;
    case 'max-hp':
      topTenPokemon = data.sort((a, b) => (parseInt(b.stats['max-hp']) - parseInt(a.stats['max-hp']))).slice(0, 10);
      break;
    default:
      // do nothing
  }
  return topTenPokemon
}
