// estas funciones son de ejemplo

export const filterData  = (data, property, value) => {
  const type = data.filter(elem=> elem[property].includes(value))
  //console.log(type)
  return type
}

/*export const sortData = () => {
  return 'OMG';
};*/

