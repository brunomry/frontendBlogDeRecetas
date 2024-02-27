import {React, useState } from 'react';
import '../../../style/cardReceta.css';
import {Link} from "react-router-dom";

const CardReceta = ({ receta }) => {
  return (
    <div className='col-lg-6 p-3'>
      <div className='contenedor'>
        <div className='imgContenedor'>
          <img
            src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Receta'
          />
        </div>
        <div className='my-3'>
          <h3 className='m-0'>{receta.nombreReceta}</h3>
        </div>
        <div>
          <p className='m-0 my-3'>
            {receta.fecha} | por {receta.autor}
            <br />
            {receta.descripcionBreve}
          </p>
          <Link className='p-2 botonSeguirLeyendo' to={`/detalleReceta/${receta.id}`}>
            Seguir leyendo <i className='bi bi-arrow-right'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardReceta;