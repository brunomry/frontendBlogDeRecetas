import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoverde.png";
import "../../style/menu.css";

const Menu = ({ inicio, recetas, administrador, nosotros }) => {
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
                className={`nav-link me-3 fs-5 ${
                  administrador ? "nav-link" : ""
                }`}
                to="/administrador"
              >
                Administrador
              </NavLink>
              <NavLink
                end
                className={`nav-link me-3 fs-5 ${nosotros ? "nav-link" : ""}`}
                to="/nosotros"
              >
                ¿Quiénes somos?
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
