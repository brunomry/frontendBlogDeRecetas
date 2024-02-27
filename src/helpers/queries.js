//consultas

const URL_Receta = import.meta.env.VITE_API_RECETAS;

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

//POST
export const crearRecetaAPI = async (recetaNueva) =>{
  try{
    const respuesta = await fetch(URL_Receta,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(recetaNueva) 
    });
    console.log(respuesta);
    return respuesta;
  }catch(error){
    console.log(error);
  }
}