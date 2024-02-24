import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./App.css";
import Nosotros from './components/pages/Nosotros';
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
    <Error404></Error404>
    <Nosotros />
    </>
  );
}

export default App;
