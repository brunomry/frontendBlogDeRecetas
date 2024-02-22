import React, { useEffect, useState } from 'react';
import { leerRecetas } from '../../helpers/queries';
import CardReceta from '../../CardReceta';

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
  //Logica
  return (
    <div className='container'>
      <h1 className='text-center m-3'>Blog de cocina</h1>
      <p className='m-0 m-4'>
        ¡Bienvenidos a nuestro blog culinario! Descubre recetas deliciosas para
        cada ocasión, desde platos tradicionales hasta creaciones innovadoras.
        Explora técnicas, consejos y secretos de la cocina con nosotros.
        Acompáñanos en un viaje gastronómico lleno de sabores y aromas.
        ¡Prepárate para inspirarte y sorprender a tus seres queridos en la mesa!
      </p>
      <h2 className='text-center m-4'>Recetas de Blog de cocina</h2>
      <div className='row m-0'>
        {recetas.map((recetas) => (
          <CardReceta key={recetas.id} recetas={recetas} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
