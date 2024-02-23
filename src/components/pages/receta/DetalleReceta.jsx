import React from "react";
import receta from "../../../assets/receta (1).jpeg";

const DetalleReceta = () => {
  return (
    <section className="container py-5">
      <article className="detailRecipe mx-auto">
        <h1 className="text-center mb-4">Receta de cocina</h1>
        <figure className="text-center">
          <img src={receta} alt="imagen de receta" className="imgReceta" />
          <figcaption className="mt-2"> 12-02-2024 | Por Juan Perez</figcaption>
        </figure>
        <p>
          Este plato combina la jugosidad del pollo a la parrilla con la
          frescura y sabor de las verduras asadas. Es una opción perfecta para
          una comida completa y nutritiva, ideal para toda la familia.
        </p>
        <h3>Ingredientes</h3>
        <ul>
          <li>4 pechugas de pollo</li>
          <li>1 pimiento rojo</li>
          <li>1 pimiento verde</li>
          <li>Aceite de oliva</li>
          <li>Sal y pimienta al gusto</li>
          <li>1 cebolla</li>
          <li>2 zanahorias</li>
        </ul>
        <h3>Preparación</h3>
        <ol type="1">
          <li>
            Marinar las pechugas de pollo con sal, pimienta y un poco de aceite
            de oliva.
          </li>
          <li>Precalentar la parrilla a fuego medio-alto.</li>
          <li>
            Asar las pechugas de pollo hasta que estén cocidas por completo,
            aproximadamente 8-10 minutos por cada lado.
          </li>
          <li>
            Mientras tanto, colocar las verduras en una bandeja para hornear,
            rociar con aceite de oliva, salpimentar al gusto y hornear a 200°C
            durante 20-25 minutos o hasta que estén tiernas.
          </li>
          <li>Servir el pollo junto con las verduras asadas y disfrutar.</li>
          <li>Lavar y cortar las verduras en trozos medianos.</li>
        </ol>
      </article>
    </section>
  );
};

export default DetalleReceta;
