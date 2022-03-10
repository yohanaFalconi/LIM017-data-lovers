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