// estas funciones son de ejemplo

export const filterData  = (data, property, value) => {
  const type = data.filter(elem=> elem[property].includes(value))
  //console.log(type)
  return type
}

/*export const sortData = () => {
  return 'OMG';
};*/

export function orderBy(data,clicked){
  let newArray = [...data];
  //if (clicked == whichOrder[1])
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