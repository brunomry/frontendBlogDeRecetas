
import {React, useEffect, useState } from 'react';
import { leerRecetas } from '../../helpers/queries';
import CardReceta from '../pages/receta/CardReceta.jsx';

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    consultarAPI();
  }, []);
  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetas();
      setRecetas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Rincón de Placeres Gastronómicos</h1>
      <p className='m-0 my-5 text-center'>
        ¡Bienvenidos a nuestro blog culinario! Descubre recetas deliciosas para
        cada ocasión, desde platos tradicionales hasta creaciones innovadoras.
        Explora técnicas, consejos y secretos de la cocina con nosotros.
        Acompáñanos en un viaje gastronómico lleno de sabores y aromas.
        ¡Prepárate para inspirarte y sorprender a tus seres queridos en la mesa!
      </p>
      <h2 className='text-center my-4'>
        Recetas del Rincón de Placeres Gastronómicos
      </h2>
      <div className='row m-0'>
        {recetas.map((receta) => (
          <CardReceta key={receta.id} receta={receta} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
