import { Button, Table } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";

const Administrador = () => {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Lista de Recetas registradas</h1>
        <Button className="btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Nombre de Receta</th>
            <th>Fecha</th>
            <th>Imagen</th>
            <th>Autor</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemReceta></ItemReceta>
          <ItemReceta></ItemReceta>
          <ItemReceta></ItemReceta>
          <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
