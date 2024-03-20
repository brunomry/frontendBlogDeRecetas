import { Card, Form, Button } from "react-bootstrap";

const IniciarSesion = () => {
  return (
    <section className="mainSection containerLogin mx-auto px-2">
      <Card className="my-5">
        <Card.Header as="h5" className="text-center">Bienvenido</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Ingrese un email" />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
              <Form.Text className="text-danger"></Form.Text>
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
