import { Button, Table } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { useEffect, useState } from "react";
import { leerRecetaAPI } from "../../helpers/queries";

const Administrador = () => {
    const [recetas, setRecetas] =  useState([]);
    
    useEffect(  ()=>{
      consultarAPI()
    }, [])
    
    const consultarAPI = async()=>{
      try{
        const respuesta = await leerRecetaAPI();
        setRecetas(respuesta);
      }catch (error){
        console.log(error)
      }
    }


  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Lista de Recetas registradas</h1>
        <Button className="btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Nombre de Receta</th>
            <th>Fecha</th>
            <th>Imagen</th>
            <th>Autor</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {
            recetas.map((receta)=>  <ItemReceta key={receta.id} receta={receta}></ItemReceta>)
          }
        </tbody>
      </Table>
    </section>
    
  );
};

export default Administrador;
