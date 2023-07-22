// este archivo contenga toda la funcionalidad 
//que corresponda a obtener, procesar y manipular datos (tus funciones). Por ejemplo:
// estas funciones son de ejemplo

// funciòn que convierta los personajes en el html para volver a ejecutar y reemplace el contenido

export const especieF = (data) => {
  const espec = ["Human"]
  return data.filter((item) => espec.includes(item.species));
};

