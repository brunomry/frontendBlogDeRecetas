import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../helpers/queries";
import Swal from 'sweetalert2';

const IniciarSesion = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      Swal.fire({
        title: "Usuario Logueado",
        text: `Bienvenido ${usuario.email}`,
        icon: "success",
      });
      navegacion("/administrador");
      setUsuarioLogueado(usuario.email);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: `El email o contraseña es incorrecto`,
        icon: "error",
      });
    }
  };

  return (
    <section className="mainSection containerLogin mx-auto px-2">
      <Card className="my-5">
        <Card.Header as="h5" className="text-center">
          Bienvenido
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El mail es obligatorio",
                  minLength: {
                    value: 4,
                    message: "El email debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 250,
                    message:
                      "El email debe contener como máximo 250 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message:
                      "Ingrese una dirección de correo electrónico válida",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "El password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar 8 caracteres como mínimo",
                  },
                  maxLength: {
                    value: 12,
                    message: "Debe ingresar 15 caracteres como máximo",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="text-end">
              <Button variant="dark" type="submit" className="px-5 btnLogin">
                Iniciar sesión
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default IniciarSesion;
