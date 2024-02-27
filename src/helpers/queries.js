//consultas
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
