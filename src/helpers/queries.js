
const URL_Recetas = import.meta.env.VITE_API_RECETAS;
export const leerRecetas = async () => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};
//detalle receta
const buscarReceta = (recetas, id) => {
  return recetas.find((receta) => receta.id === id);
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const recetas = await respuesta.json();
    const recetaEncontrada = buscarReceta(recetas, id);
    return recetaEncontrada;
  } catch (error) {
    console.log(error);
    return null;
  }
};

