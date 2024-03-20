import "../../../style/cardReceta.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CardReceta = ({ receta }) => {
  return (
    <Card className="col-lg-6 p-3 border-0 text-decoration-none">
      <div className="contenedor">
        <div className="imgContenedor">
          <img
            src={receta.imagen}
            alt="receta preparada"
            title="receta preparada"
          />
        </div>
        <Card.Body className="ps-0 pb-0">
          <div className="my-3">
            <h3 className="m-0">{receta.nombreReceta}</h3>
          </div>
          <div>
            <p className="m-0 my-3">
              {receta.fecha} | por {receta.autor}
            </p>
            <p className="briefDescription">{receta.descripcionBreve}</p>
          </div>
        </Card.Body>

        <Card.Footer className="ps-0 border-0 bg-white">
          <Link
            className="p-2 botonSeguirLeyendo text-decoration-none text-dark"
            to={`/detalleReceta/${receta._id}`}
          >
            Seguir leyendo <i className="bi bi-arrow-right"></i>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default CardReceta;
