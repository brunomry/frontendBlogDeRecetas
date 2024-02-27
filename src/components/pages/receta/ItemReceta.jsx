import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemReceta = ({ receta }) => {
  return (
    <tr>
      <td className='text-center'>{receta.id}</td>
      <td>{receta.nombreReceta}</td>

      <td className='text-end'>{receta.fecha}</td>
      <td className='text-center'>
        <img
          src={receta.imagen}
          className='img-thumbnail'
          alt='imagen de comida'
        ></img>
      </td>
      <td>{receta.autor}</td>
      <td className='text-center'>
        <Button variant='primary' className='me-lg-2'>
          <i className='bi bi-eye-fill'></i>
        </Button>
        <Link
          className='me-lg-2 btn btn-warning'
          to={'/administrador/editar/' + receta.id}
        >
          <i className='bi bi-pencil-square'></i>
        </Link>
        <Button variant='danger'>
          <i className='bi bi-trash'></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
