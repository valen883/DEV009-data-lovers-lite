
// funciòn que convierta los personajes en el html para volver a ejecutar y reemplace el contenido

export const especieF = (data) => {
  const espec = ["Human"]
  return data.filter((item) => espec.includes(item.species));
};

//Puedes usar el método sort() junto a localeCompare() 
export const orderData = (data, sorting) => {
  const field = sorting.field
  if (field === "popularity") {
    return data
  }
  return data.slice().sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (a[field] < b[field]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

};

export const filterData = (data, filters) => {
  const especies = filters["species"];
  if (especies.length) {
    data = data.filter((item) => especies.includes(item.species.toLowerCase()));
  }
  return data
}