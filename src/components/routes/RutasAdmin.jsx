import { Route, Routes } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioReceta from "../pages/receta/FormularioReceta";

const RutasAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Administrador administrador={true}></Administrador>}></Route>
      <Route
        exact
        path="/crear"
        element={
          <FormularioReceta
            editar={false}
            deshabilitado={false}
            boton="Cancelar"
            ocultar={false}
            titulo="Nueva receta"
          ></FormularioReceta>
        }
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={
          <FormularioReceta
            editar={true}
            boton="Cancelar"
            ocultar={false}
            titulo="Editar receta"
          ></FormularioReceta>
        }
      ></Route>
      <Route
        path="/verDetalle/:id"
        element={
          <FormularioReceta
            titulo="Detalle de la receta"
            boton="Volver"
            deshabilitado={true}
            ocultar={true}
            verDetalle={true}
          ></FormularioReceta>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
