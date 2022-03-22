// estas funciones son de ejemplo

export const filterData  = (data, property, value) => {
  const type = data.filter(elem=> elem[property].includes(value))
  return type
}

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
  }
  return newArray; 
}

// funcion para top10 segun puntos de combate
export const topStats = (data, click, i) => {
  let topTenPokemon = [];
  topTenPokemon = data.sort((a, b) => (parseInt(b.stats[click]) - parseInt(a.stats[click]))).slice(0, i);
  return topTenPokemon
}
