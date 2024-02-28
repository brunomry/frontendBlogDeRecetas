import logo from "../../assets/logoverde.png";
import { Link } from "react-router-dom";
import '../../style/footer.css';

const Footer = () => {
  return (
    <footer className="text-center bgFooter text-light pt-4">
      <section className="mb-5">
        <article className="mt-5 mb-4 row mx-0 justify-content-center gap-5 gap-md-5 gap-xl-0">
          <div className="text-center col-xl-3">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="col-md-4 col-xl-3">
            <h5 className="mb-3">Contacto</h5>
            <p className="d-flex justify-content-center gap-2 align-items-center mb-0">
              <i className="bi bi-google text-danger fs-4"></i>
              <span>blogrecetas@gmail.com</span>
            </p>
            <p className="d-flex justify-content-center gap-2 align-items-center">
              <i className="bi bi-telephone-fill text-dark fs-4"></i>
              <span>+54 9 381 6485283</span>
            </p>
          </div>
          <div className="col-md-4 col-xl-3">
            <h5 className="mb-3">Información</h5>
            <ul className="list-unstyled">
              <li><Link to="/error404" className="link text-white">Términos y Condiciones</Link></li>
              <li><Link to="/error404" className="link text-white">Aviso de privacidad</Link></li>
              <li><Link to="/error404" className="link text-white">Suscríbete</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-xl-3">
            <h5 className="mb-3">Seguinos en redes sociales</h5>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/error404" target="_BLANK">
                <i className="bi bi-facebook fs-2 text-white"></i>
              </Link>
              <Link to="/error404" target="_BLANK">
                <i className="bi bi-instagram fs-2 text-white"></i>
              </Link>
              <Link to="/error404" target="_BLANK">
                <i className="bi bi-youtube fs-2 text-white"></i>
              </Link>
            </div>
          </div>
        </article>
      </section>
      <p className="fw-bold mb-1">
        &copy;Copyright 2024. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
