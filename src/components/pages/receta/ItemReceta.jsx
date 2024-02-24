import { Button } from "react-bootstrap";


const ItemReceta = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Pollo a la Parrilla con Verduras Asadas</td>

      <td className="text-end">2024-02-21</td>
      <td className="text-center">
        <img src="" className="img-thumbnail" alt="imagen de comida"></img>
      </td>
      <td>Juan Pérez</td>
      <td className="text-center">
        <Button variant="primary" className="me-lg-2">
          <i className="bi bi-eye-fill"></i>
        </Button>
        <Button variant="warning" className="me-lg-2">
           <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
