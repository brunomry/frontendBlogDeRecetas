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

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Receta + '/' + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URL_Receta, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recetaNueva),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT
export const editarRecetaAPI = async (recetaModificada, id) => {
  try {
    const respuesta = await fetch(`${URL_Receta}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recetaModificada),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
