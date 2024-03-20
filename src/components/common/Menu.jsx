import { Nav, Navbar, Container, Button} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logoverde.png";
import "../../style/menu.css";

const Menu = ({
  inicio,
  recetas,
  administrador,
  nosotros,
  usuarioLogueado,
  setUsuarioLogueado,
}) => {

  const navegacion = useNavigate();

  const salir = () => {
    sessionStorage.removeItem('usuarioBlogRecetas');
    setUsuarioLogueado("");
    navegacion('/');
  }

  return (
    <header>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container className="d-flex flex-md-column gap-3">
          <Navbar.Brand as={Link} to="/" className="mt-2">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center mb-3">
              <NavLink
                end
                className={`nav-link me-3 fs-5 ${inicio ? "nav-link" : ""}`}
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                end
                className={`nav-link me-3 fs-5 ${recetas ? "nav-link" : ""}`}
                to="/recetas"
              >
                Recetas
              </NavLink>
              <NavLink
                end
                className={`nav-link me-3 fs-5 ${nosotros ? "nav-link" : ""}`}
                to="/nosotros"
              >
                ¿Quiénes somos?
              </NavLink>
              {usuarioLogueado !== "" ? (
                <>
                  <NavLink
                    end
                    className={`nav-link me-3 fs-5 ${
                      administrador ? "nav-link" : ""
                    }`}
                    to="/administrador"
                  >
                    Administrador
                  </NavLink>
                  <Button className="nav-link me-3 fs-5 mb-1" variant="link" as={NavLink} onClick={salir}>
                    Salir
                  </Button>
                </>
              ) : (
                <>
                  <NavLink end className="nav-link me-3 fs-5" to="/registrarse">
                    Registrarme
                  </NavLink>
                  <NavLink
                    end
                    className="nav-link me-3 fs-5"
                    to="/iniciarsesion"
                  >
                    Iniciar sesión
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
