import "./App.css";
import Administrador from "./components/pages/Administrador";
import FormularioReceta from "./components/pages/receta/FormularioReceta";
import Error404 from "./components/pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     { <Administrador></Administrador> }
     {/* <FormularioReceta></FormularioReceta> */}
    </>
  )
}

export default App
