import React from "react";
import Leonel from "../../img/Leonel.jpg";
import Bruno from "../../img/Bruno.jpg";
import Javier from "../../img/Javier.jpg";
import "../../style/nosotros.css";

const Nosotros = () => {
  return (
    <div className="container p-0 mb-5 mt-5 mt-md-2 mt-lg-4">
      <h1 className="text-center mb-3">Equipo</h1>
      <p className="text-center mb-5 mx-auto description px-2">
        ¡Bienvenidos al equipo detrás de Rincón de Placeres Gastronómicos! Somos
        un apasionado grupo de entusiastas de la cocina dedicados a compartir
        nuestra pasión por la comida a través de nuestro exitoso blog.
        ¡Únete a nosotros en este emocionante viaje mientras
        exploramos sabores, compartimos recetas innovadoras y creamos
        experiencias gastronómicas memorables juntos!
      </p>
      <div className="row m-0 gap-3 gap-md-5 gap-lg-3 gap-xl-0 justify-content-center mb-5">
        <div className="col-md-4 p-0">
          <div className="contenedorImg d-flex justify-content-center my-3">
            <img src={Leonel} alt="Integrante" />
          </div>
          <h3 className="text-center">Cordero Leonel Rodrigo</h3>
          <div className="text-center">
            <a href="https://github.com/dashboard" target="_blank">
              <i className="bi bi-linkedin mx-3"></i>
            </a>
            <a href="https://github.com/dashboard" target="_blank">
              <i className="bi bi-github mx-3"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="contenedorImg d-flex justify-content-center my-3">
            <img src={Bruno} alt="Integrante" />
          </div>
          <h3 className="text-center">Bruno Madozzo Romay</h3>
          <div className="text-center">
            <a href="https://github.com/dashboard" target="_blank">
              <i className="bi bi-linkedin mx-3"></i>
            </a>
            <a href="https://github.com/dashboard" target="_blank">
              <i className="bi bi-github mx-3"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="contenedorImg d-flex justify-content-center my-3">
            <img src={Javier} alt="Integrante" />
          </div>
          <h3 className="text-center">Javier Exequiel Jiménez</h3>
          <div className="text-center">
            <a href="https://github.com/dashboard" target="_blank">
              <i className="bi bi-linkedin mx-3"></i>
            </a>
            <a href="https://github.com/dashboard" target="_blank">
              <i className="bi bi-github mx-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
