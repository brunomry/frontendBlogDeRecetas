import logo from "../../assets/logoverde.png";

const Footer = () => {
  return (
    <footer className="text-center bgFooter text-light pt-4">
      <section className="mb-5">
        <article className="text-center">
          <img src={logo} alt="logo" className="logo"/>
        </article>
        <article className="mt-5 mb-4 row justify-content-center gap-4">
          <div className="col-md-6 col-lg-4">
            <h5 className="mb-2">Información</h5>
            <p className="d-flex justify-content-center gap-2 align-items-center">
              <i className="bi bi-google text-danger fs-2"></i>
              <span className="text-secondary fw-bold">blogrecetas@gmail.com</span>
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h5 className="mb-2">Seguinos en redes sociales</h5>
            <div className="d-flex gap-3 justify-content-center">
              <a href="">
                <i className="bi bi-facebook fs-2"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram fs-2 text-danger"></i>
              </a>
            </div>
          </div>
        </article>
      </section>
      <p className="text-secondary fw-bold mb-1">&copy;Blog Todos los derechos reservados. 2024</p>
    </footer>
  );
};

export default Footer;
