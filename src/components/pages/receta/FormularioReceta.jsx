import { Form, Button } from "react-bootstrap";
import { crearRecetaAPI } from "../../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioReceta = () => {
  const {
    handleSubmit,
    reset,
  } = useForm();

  const recetaValidada = async (receta) => {
    const respuesta = await crearRecetaAPI(receta);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Receta registrada!",
        text: `La receta "${receta.nombreReceta}" fue registrada exitosamente`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrió un error!",
        text: `La receta "${receta.nombreReceta}" no pudo ser registrada. Intente esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form className="my-4 sizeForm" onSubmit={handleSubmit(recetaValidada)}>
        <Form.Group className="mb-3 " controlId="formNombreReceta">
          <Form.Label>Nombre de Receta *</Form.Label>
          <Form.Control type="text" placeholder="Ej: Pastel de papa" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formDescripcionBreve">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            className="textarea"
            type="text"
            placeholder="Ej: una receta especial para comer"
            as="textarea"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formDescripcionAmplia">
          <Form.Label>Descripcion amplia*</Form.Label>
          <Form.Control
            className="textarea inputBroadDescription"
            type="text"
            placeholder="Ej: una receta lista para la casa..."
            as="textarea"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            className="textarea"
            type="text"
            as="textarea"
            placeholder="Ej: sal, pimienta, aceite, huevos..."
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formPreparacion">
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            className="textarea inputPreparation"
            type="text"
            as="textarea"
            placeholder="Ej: saltear la carne a fuego lento. Al horno media hora."
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formAutor">
          <Form.Label>Autor*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Juan Perez" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formFecha">
          <Form.Label>Fecha*</Form.Label>
          <Form.Control type="date" placeholder="Ej: 14/12/2003" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formImagen">
          <Form.Label>URL de imagen*</Form.Label>
          <Form.Control type="url" placeholder="Ej: https..." />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Button type="submit" variant="success" className="m-2 btnForm">
            Guardar
          </Button>
          <Button type="submit" variant="danger" className="m-2 btnForm">
            Cancelar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioReceta;
