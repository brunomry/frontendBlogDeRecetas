import React from 'react';
import Leonel from '../../img/Leonel.jpg';
import Bruno from '../../img/Bruno.jpg';
import Javier from '../../img/Javier.jpg';
import '../../style/nosotros.css';

const Nosotros = () => {
  return (
    <div className='container p-0'>
      <h1 className='text-center my-3'>Equipo</h1>
      <p>
        Presentamos al equipo de Pasión Culinaria, responsables del exitoso blog
        de cocina donde exploramos sabores y compartimos recetas innovadoras.
        Nuestro equipo incluye al fundador, un líder creativo apasionado por la
        cocina, al chef principal, experto culinario con habilidades
        excepcionales, al editor de contenido, garante de una narración
        cautivadora, y al especialista en redes sociales, encargado de nuestra
        presencia digital. Nuestro objetivo es inspirar a los lectores a
        explorar la cocina, descubrir nuevos sabores y crear recuerdos
        inolvidables alrededor de la mesa. Con dedicación y creatividad, estamos
        comprometidos en compartir nuestra pasión por la cocina y deleitar a los
        amantes de la buena comida en cada publicación que compartimos.
      </p>
      <div className='row m-0'>
        <div className='col-lg-4 p-0'>
          <div className='contenedorImg d-flex justify-content-center my-3'>
            <img src={Leonel} alt='Integrante' />
          </div>
          <h3 className='text-center'>Cordero Leonel Rodrigo</h3>
          <div className='text-center'>
            <a href='https://github.com/dashboard' target='_blank'>
              <i className='bi bi-linkedin mx-3'></i>
            </a>
            <a href='https://github.com/dashboard' target='_blank'>
              <i className='bi bi-github mx-3'></i>
            </a>
          </div>
        </div>
        <div className='col-lg-4 p-0'>
          <div className='contenedorImg d-flex justify-content-center my-3'>
            <img src={Bruno} alt='Integrante' />
          </div>
          <h3 className='text-center'>Bruno Madozzo Romay</h3>
          <div className='text-center'>
            <a href='https://github.com/dashboard' target='_blank'>
              <i className='bi bi-linkedin mx-3'></i>
            </a>
            <a href='https://github.com/dashboard' target='_blank'>
              <i className='bi bi-github mx-3'></i>
            </a>
          </div>
        </div>
        <div className='col-lg-4 p-0'>
          <div className='contenedorImg d-flex justify-content-center my-3'>
            <img src={Javier} alt='Integrante' />
          </div>
          <h3 className='text-center'>Javier Exequiel Jiménez</h3>
          <div className='text-center'>
            <a href='https://github.com/dashboard' target='_blank'>
              <i className='bi bi-linkedin mx-3'></i>
            </a>
            <a href='https://github.com/dashboard' target='_blank'>
              <i className='bi bi-github mx-3'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
