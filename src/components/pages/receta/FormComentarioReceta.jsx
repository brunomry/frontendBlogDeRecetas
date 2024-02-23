import React from "react";
import Card from "react-bootstrap/Card";
import ares from "../../../assets/ares.jpeg";

const FormComentarioReceta = () => {
  return (
    <div>
      <h4 className="text-center">Comentarios</h4>
      <hr className="pb-3"/>
      <Card className="cardComment mx-auto">
        <Card.Body>
          <div className="d-flex gap-3">
            <div className="my-3">
              <img src={ares} alt="imagen" className="rounded-circle" width={100} height={100}/>
            </div>
            <div className="mt-3">
              <Card.Title>Usuario</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                hace un día
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text className="ms-5">
            Muy buena! Gracias por la receta. Abrazo.
          </Card.Text>
          <span className="text-primary ms-5">Responder</span>
        </Card.Body>
      </Card>    
    </div>
  );
};

export default FormComentarioReceta;
