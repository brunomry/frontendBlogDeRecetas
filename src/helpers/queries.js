//consultas

const URL_Receta = import.meta.env.VITE_API_RECETA;

console.log(URL_Receta);

export const leerRecetaAPI = async () => {
  try {
    const respuesta = await fetch(URL_Receta);
    const listaReceta = await respuesta.json();
    return listaReceta;
  } catch (error) {
    console.log(error);
  }
};
