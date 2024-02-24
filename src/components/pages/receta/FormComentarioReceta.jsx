import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import ares from "../../../assets/ares.jpeg";
import '../../../style/detalleReceta.css';

const FormComentarioReceta = () => {
  return (
    <div>
      <h4 className="text-center">Comentarios</h4>
      <hr className="pb-3" />
      <Card className="cardComment mx-auto mb-5">
        <Card.Body>
          <div className="d-flex gap-3">
            <div className="my-3">
              <img
                src={ares}
                alt="imagen"
                className="rounded-circle"
                width={90}
                height={85}
              />
            </div>
            <div className="mt-3">
              <Card.Title>Juan Perez</Card.Title>
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
      <h4 className="mb-3 text-center">Deja una respuesta</h4>
      <p className="text-center">
        Tu dirección de correo electrónico no será publicada. Los campos
        obligatorios están marcados con{" "}
        <span className="text-danger fw-bold">*</span>
      </p>
      <Form className="my-4 formComment mx-auto">
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label className="fw-medium">
            Comentario <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Otra receta más para probar. Muchas gracias!"
            as="textarea"
            className="textarea"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label className="fw-medium">
            Nombre <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Ej: Juan Perez" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label className="fw-medium">
            Correo electrónico <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: juanperez@example.com"
            required
          />
        </Form.Group>
        <div className="text-end">
          <Button type="submit" className="btnComment border-0 px-4">
            Publicar comentario
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormComentarioReceta;
