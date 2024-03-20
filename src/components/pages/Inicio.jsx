import { React, useEffect, useState } from "react";
import { leerRecetaAPI } from "../../helpers/queries";
import CardReceta from "../pages/receta/CardReceta.jsx";

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetaAPI();
      setRecetas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Rincón de Placeres Gastronómicos</h1>
      <p className="m-0 mb-5 text-center description mx-auto">
        ¡Bienvenidos a nuestro blog! Descubre recetas deliciosas para cada
        ocasión, desde platos tradicionales hasta creaciones innovadoras.
        Explora técnicas, consejos y secretos de la cocina con nosotros.
        ¡Prepárate para inspirarte y sorprender a tus seres queridos en la mesa!
      </p>
      <h2 className="text-center my-4">Nuestras recetas</h2>
      <div className="row m-0 gy-3">
        {recetas.map((receta) => (
          <CardReceta key={receta._id} receta={receta} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
