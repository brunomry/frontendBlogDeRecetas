import "./App.css";
import "./style/administrador.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import DetalleReceta from "./components/pages/receta/DetalleReceta";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RutasAdmin from "./components/routes/RutasAdmin";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import IniciarSesion from "./components/pages/IniciarSesion";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>} inicio={true}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/detalleReceta/:id"
          element={<DetalleReceta></DetalleReceta>}
        ></Route>
        <Route
          exact
          path="/iniciarsesion"
          element={<IniciarSesion></IniciarSesion>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
