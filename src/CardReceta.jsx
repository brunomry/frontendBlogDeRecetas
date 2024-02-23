import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import './style/cardReceta.css';

const CardReceta = ({ recetas }) => {
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
          <h3 className='m-0'>{recetas.nombreReceta}</h3>
        </div>
        <div>
          <p className='m-0 my-3'>
            {recetas.fecha} | por {recetas.autor}
            <br />
            {recetas.descripcionBreve}
          </p>
          <button className='p-2 botonSeguirLeyendo'>
            Seguir leyendo <i class='bi bi-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardReceta;
