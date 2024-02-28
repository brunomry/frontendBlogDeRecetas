import React from 'react';
import imagenReceta from '../../../assets/receta (1).jpeg';
import FormComentarioReceta from './FormComentarioReceta';
import '../../../style/detalleReceta.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Error404 from '../Error404';
import { obtenerRecetaPorID } from '../../../helpers/queries';

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    cargarDatosReceta();
  }, []);

  const cargarDatosReceta = async () => {
    try {
      const recetaObtenida = await obtenerRecetaPorID(id);
      setReceta(recetaObtenida);
    } catch (error) {
      console.log(error);
    }
  };

  return receta ? (
    <section className='container py-5'>
      <article className='detailRecipe mx-auto mb-5'>
        <h1 className='text-center mb-4'>{receta.nombreReceta}</h1>
        <figure className='text-center'>
          <img
            src={imagenReceta}
            alt='imagen de receta'
            className='imgReceta'
          />
          <figcaption className='mt-2'>
            {receta.fecha} | Por {receta.autor}
          </figcaption>
        </figure>
        <p>{receta.descripcionAmplia}</p>
        <h3>Ingredientes</h3>
        <ul>
          {receta.ingredientes.split(',').map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        <h3>Preparación</h3>
        <ol type='1'>
          {receta.preparacion.split('.').map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ol>
      </article>
      <article className='detailRecipe mx-auto'>
        <FormComentarioReceta />
      </article>
    </section>
  ) : (
    <Error404 />
  );
};

export default DetalleReceta;
