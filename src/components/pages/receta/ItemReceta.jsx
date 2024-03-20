import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { borrarRecetaAPI, leerRecetaAPI } from '../../../helpers/queries.js';

const ItemReceta = ({ receta, setRecetas }) => {
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
        const respuesta = await borrarRecetaAPI(receta._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: 'Receta eliminada!',
            text: `La receta "${receta.nombreReceta}" fue eliminada correctamente.`,
            icon: 'success',
          });
          const listaRecetas = await leerRecetaAPI();
          setRecetas(listaRecetas);
        } else {
          Swal.fire({
            title: 'Ocurrió un error!',
            text: `La receta "${receta.nombreReceta}" no fue eliminada correctamente. Vuelva a intentarlo.`,
            icon: 'error',
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className='text-center align-middle'>{receta._id}</td>
      <td className='text-center align-middle'>{receta.nombreReceta}</td>
      <td className='text-center align-middle'>{receta.fecha}</td>
      <td className='text-center align-middle'>
        <img
          src={receta.imagen}
          className=''
          alt='imagen de comida'
          width={250}
          height={200}
        ></img>
      </td>
      <td className='text-center align-middle'>{receta.autor}</td>
      <td className='text-center align-middle'>
        <Button
          variant='primary'
          className='me-md-2 mb-2 mb-2 mb-lg-0'
          as={Link}
          to={'/administrador/verDetalle/' + receta._id}
        >
          <i className='bi bi-eye-fill'></i>
        </Button>
        <Link
          className='me-md-2 btn btn-warning mb-2 mb-lg-0'
          to={'/administrador/editar/' + receta._id}
        >
          <i className='bi bi-pencil-square'></i>
        </Link>
        <Button variant='danger' className='mt-lg-2 mt-xl-0 me-md-2' onClick={borrarReceta}>
          <i className='bi bi-trash'></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
