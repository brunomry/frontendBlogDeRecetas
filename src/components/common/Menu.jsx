import { Nav, Navbar, Container } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container className="d-flex flex-md-column gap-3">
          <Navbar.Brand as={Link} to="/" className="mt-3">
            <img src="" alt="logo" className="logo" width={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto text-center">
              <NavLink end className="nav-link me-3 fs-5" to="/">Inicio</NavLink>
              <NavLink end className="nav-link me-3 fs-5" to="/recetas">Recetas</NavLink>
              <NavLink end className="nav-link me-3 fs-5" to="/administrador">Administrador</NavLink>
              <NavLink end className="nav-link me-3 fs-5" to="/nosotros">Nosotros</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
