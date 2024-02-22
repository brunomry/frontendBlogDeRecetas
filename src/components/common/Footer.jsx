const Footer = () => {
  return (
    <footer className="text-center bgFooter text-light pt-5">
      <section className="mb-5">
        <article className="text-center">
          <img src="" alt="logo" width={150} />
        </article>
        <article className="my-5 row justify-content-center gap-4">
          <div className="col-md-6 col-lg-4">
            <h5 className="mb-2">Información</h5>
            <p className="d-flex justify-content-center gap-2 align-items-center">
              <i class="bi bi-google text-danger fs-2"></i>
              <span>blogrecetas@gmail.com</span>
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h5 className="mb-2">Seguinos en redes sociales</h5>
            <div className="d-flex gap-3 justify-content-center">
              <a href="">
                <i class="bi bi-facebook fs-2"></i>
              </a>
              <a href="">
                <i class="bi bi-instagram fs-2 text-danger"></i>
              </a>
            </div>
          </div>
        </article>
      </section>
      <p>&copy;Blog Todos los derechos reservados. 2024</p>
    </footer>
  );
};

export default Footer;
