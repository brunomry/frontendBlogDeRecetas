import { Form, Button } from 'react-bootstrap';
import {
  crearRecetaAPI,
  editarRecetaAPI,
  obtenerRecetaAPI,
} from '../../../helpers/queries';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FormularioReceta = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();
  useEffect(() => {
    //invocar una funcion que devuelva un producto con el id del parametro
    // if (editar) {
    cargarDatosReceta();
    // }
  }, []);
  const cargarDatosReceta = async () => {
    try {
      const respuesta = await obtenerRecetaAPI(id);
      if (respuesta.status === 200) {
        const recetaEncontrada = await respuesta.json();
        //quiero cargar el producto encontrado en el formulario
        setValue('nombreReceta', recetaEncontrada.nombreReceta);
        setValue('descripcionBreve', recetaEncontrada.descripcionBreve);
        setValue('descripcionAmplia', recetaEncontrada.descripcionAmplia);
        setValue('ingredientes', recetaEncontrada.ingredientes);
        setValue('preparacion', recetaEncontrada.preparacion);
        setValue('autor', recetaEncontrada.autor);
        setValue('fecha', recetaEncontrada.fecha);
        setValue('imagen', recetaEncontrada.imagen);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const recetaValidada = async (receta) => {
    if (editar) {
      console.log('aqui debo editar');
      //tomar los datos y actualizarlo
      const respuesta = await editarRecetaAPI(receta, id);
      console.log(respuesta.status);
      if (respuesta.status === 200) {
        Swal.fire({
          title: 'Receta modificada!',
          text: `La receta "${receta.nombreReceta}" fue modificada exitosamente`,
          icon: 'success',
        });
        navegacion('/administrador');
      } else {
        Swal.fire({
          title: 'Ocurrió un error!',
          text: `La receta "${receta.nombreReceta}" no pudo ser modificada. Intente esta operación en unos minutos.`,
          icon: 'error',
        });
      }
    } else {
      const respuesta = await crearRecetaAPI(receta);
      if (respuesta.status === 201) {
        Swal.fire({
          title: 'Receta registrada!',
          text: `La receta "${receta.nombreReceta}" fue registrada exitosamente`,
          icon: 'success',
        });
        reset();
      } else {
        Swal.fire({
          title: 'Ocurrió un error!',
          text: `La receta "${receta.nombreReceta}" no pudo ser registrada. Intente esta operación en unos minutos.`,
          icon: 'error',
        });
      }
    }
  };

  return (
    <section className='container mainSection'>
      <h1 className='display-4 mt-5'>{titulo}</h1>
      <hr />
      <p>
        Los campos obligatorios están marcados con{' '}
        <span className='text-danger fw-bold'>*</span>
      </p>
      <Form className='my-4 sizeForm' onSubmit={handleSubmit(recetaValidada)}>
        <Form.Group className='mb-3 ' controlId='formNombreReceta'>
          <Form.Label className='fw-medium'>
            Nombre de Receta <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Ej: Pastel de papa'
            {...register('nombreReceta', {
              required: 'El nombre de la receta es obligatorio',
              minLength: {
                value: 10,
                message:
                  'El nombre de la receta debe tener como mínimo 10 caracteres',
              },
              maxLength: {
                value: 50,
                message:
                  'El nombre de la receta debe tener como máximo 50 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='formDescripcionBreve'>
          <Form.Label className='fw-medium'>
            Descripción breve <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            className='textarea'
            type='text'
            placeholder='Ej: una receta especial para comer'
            as='textarea'
            {...register('descripcionBreve', {
              required: 'La descripción breve es obligatoria',
              minLength: {
                value: 10,
                message:
                  'La descripción breve debe tener como mínimo 10 caracteres',
              },
              maxLength: {
                value: 65,
                message:
                  'La descripción breve debe tener como máximo 65 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='formDescripcionAmplia'>
          <Form.Label className='fw-medium'>
            Descripcion amplia <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            className='textarea inputBroadDescription'
            type='text'
            placeholder='Ej: una receta lista para la casa...'
            as='textarea'
            {...register('descripcionAmplia', {
              required: 'La descripción amplia es obligatoria',
              minLength: {
                value: 50,
                message:
                  'La descripción amplia debe tener como mínimo 50 caracteres',
              },
              maxLength: {
                value: 500,
                message:
                  'La descripción amplia debe tener como máximo 300 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='formIngredientes'>
          <Form.Label className='fw-medium'>
            Ingredientes <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            className='textarea'
            type='text'
            as='textarea'
            placeholder='Ej: sal, pimienta, aceite, huevos...'
            {...register('ingredientes', {
              required: 'Los ingredientes son obligatorios',
              pattern: {
                value: /.+?[^,],.+/,
                message:
                  'Los ingredientes deben ser ingresados separados por coma.',
              },
              minLength: {
                value: 10,
                message: 'Debe ingresar como mínimo 10 caracteres',
              },
              maxLength: {
                value: 300,
                message: 'Debe ingresar como máximo 300 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='formPreparacion'>
          <Form.Label className='fw-medium'>
            Preparación <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            className='textarea inputPreparation'
            type='text'
            as='textarea'
            placeholder='Ej: saltear la carne a fuego lento. Al horno media hora.'
            {...register('preparacion', {
              required: 'La preparación es obligatoria',
              pattern: {
                value: /[^\.].+?\./,
                message:
                  'Los pasos de la preparación deben ser ingresados separados por punto seguido.',
              },
              minLength: {
                value: 10,
                message: 'Debe ingresar como mínimo 10 caracteres',
              },
              maxLength: {
                value: 600,
                message: 'Debe ingresar como máximo 600 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.preparacion?.message}
          </Form.Text>
        </Form.Group>
        <div className='row'>
          <Form.Group className='mb-3 col-md-6' controlId='formAutor'>
            <Form.Label className='fw-medium'>
              Autor <span className='text-danger fw-bold'>*</span>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Juan Perez'
              {...register('autor', {
                required: 'El nombre del autor es obligatorio',
                minLength: {
                  value: 8,
                  message:
                    'El nombre del autor debe tener como mínimo 8 caracteres',
                },
                maxLength: {
                  value: 50,
                  message:
                    'El nombre del autor debe tener como máximo 50 caracteres',
                },
              })}
            />
            <Form.Text className='text-danger'>
              {errors.autor?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3 col-md-3' controlId='formFecha'>
            <Form.Label className='fw-medium'>
              Fecha <span className='text-danger fw-bold'>*</span>
            </Form.Label>
            <Form.Control
              type='date'
              placeholder='Ej: 14/12/2003'
              {...register('fecha', {
                required: 'La fecha es obligatoria',
              })}
            />
            <Form.Text className='text-danger'>
              {errors.fecha?.message}
            </Form.Text>
          </Form.Group>
        </div>

        <Form.Group className='mb-3 ' controlId='formImagen'>
          <Form.Label className='fw-medium'>
            URL de imagen <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            type='url'
            placeholder='Ej: https://ejemplo.com/imagen-ensalada-quinoa.jpg'
            {...register('imagen', {
              required: 'La imagen es obligatoria',
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: 'Debe ingresar una URL válida (jpg|jpeg|gif|png)',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 '>
          <Button type='submit' variant='success' className='m-2 btnForm'>
            Guardar
          </Button>
          <Link className='m-2 btn btn-danger' to={'/administrador'}>
            Cancelar
          </Link>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioReceta;
