import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { borrarRecetaAPI, leerRecetaAPI } from '../../../helpers/queries';

const ItemReceta = ({ receta, setRecetas }) => {
  console.log(receta);
  const borrarReceta = () => {
    Swal.fire({
      title: 'Estás seguro de eliminar la receta?',
      text: 'No se puede revertir este proceso',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: 'Borrado!',
            text: `La receta "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: 'success',
          });
          const listaRecetas = await leerRecetaAPI();
          setRecetas(listaRecetas);
        } else {
          Swal.fire({
            title: 'Ocurrio un error!',
            text: `La receta "${receta.nombreReceta}" no fue eliminada correctamente. Vuelva a intentarlo`,
            icon: 'error',
          });
        }
      }
    });
  };

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
        <Button
          variant='primary'
          className='me-lg-2'
          as={Link}
          to={'./administrador/verDetalle/:id'}
        >
          <i className='bi bi-eye-fill'></i>
        </Button>
        <Link
          className='me-lg-2 btn btn-warning'
          to={'/administrador/editar/' + receta.id}
        >
          <i className='bi bi-pencil-square'></i>
        </Link>
        <Button variant='danger' onClick={borrarReceta}>
          <i className='bi bi-trash'></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
