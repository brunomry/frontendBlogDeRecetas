import { Button } from "react-bootstrap";

const ItemReceta = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Pollo a la Parrilla con Verduras Asadas</td>
      <td className="text-center">
        <ul>
          <li>4 pechugas de pollo</li>
          <li>1 pimiento rojo</li>
          <li>1 pimiento verde</li>
          <li>1 cebolla</li>
          <li>2 zanahorias</li>
          <li>Aceite de oliva</li>
          <li>Sal y pimienta al gusto</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Lavar y cortar las verduras en trozos medianos</li>
          <li>Marinar las pechugas de pollo con sal, pimienta y un poco de aceite de oliva</li>
          <li>Precalentar la parrilla a fuego medio-alto</li>
          <li>Asar las pechugas de pollo hasta que estén cocidas por completo, aproximadamente 8-10 minutos por cada lado.</li>
          <li>Mientras tanto, colocar las verduras en una bandeja para hornear, rociar con aceite de oliva, salpimentar al gusto y hornear a 200°C durante 20-25 minutos o hasta que estén tiernas.</li>
          <li>Servir el pollo junto con las verduras asadas y disfrutar</li>
        </ul>
       </td>
      <td className="text-end">2024-02-21</td>
      <td className="text-center">
        <img
          src=""
          className="img-thumbnail"
          alt="imagen de comida"
        ></img>
      </td>
      <td>Una deliciosa y saludable opción para una comida completa</td>
      <td><p className="desc-amplia">Este plato combina la jugosidad del pollo a la parrilla con la frescura y sabor de las verduras asadas. Es una opción perfecta para una comida completa y nutritiva, ideal para toda la familia.</p></td>
      <td>Juan Pérez</td>
      <td className="text-center">
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