import { Form, Button } from "react-bootstrap";



const FormularioReceta = () => {
  return (
       <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form className="my-4">
        <Form.Group className="mb-3 tamanoForm" controlId="formNombreProdcuto">
          <Form.Label>Nomre de Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pastel de papa"
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formPrecio">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: una receta especial para comer"
            as="textarea"
          />
          <Form.Text className="text-danger">
          prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
          <Form.Label>Descripcion amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: una receta lista para la casa..."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Ej: sal, pimienta, aceite, huevos..."
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Ej: saltear la carne a fuego lento..."
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
          <Form.Label>Autor*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Juan Perez"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
          <Form.Label>Fecha*</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ej: 14/12/2003"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
          <Form.Label>URL de imagen*</Form.Label>
          <Form.Control
            type="url"
            placeholder="Ej: https..."
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3 tamanoForm" controlId="formImagen">
        <Button type="submit" variant='success' className="m-2 btnForm">
          Guardar
        </Button>
        <Button type="submit" variant='danger' className="m-2 btnForm">
          Cancelar
        </Button>
        </Form.Group>
      
      </Form>
    </section>
  );
};

export default FormularioReceta;