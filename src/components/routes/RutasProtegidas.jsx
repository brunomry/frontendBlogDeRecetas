import { Navigate } from "react-router";

const RutasProtegidas = ({children}) => {
  const administrador = JSON.parse(sessionStorage.getItem("usuarioBlogRecetas")) || null;

  if (!administrador) {
    return <Navigate to={"/iniciarsesion"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;