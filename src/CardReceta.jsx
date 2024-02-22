import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'react-bootstrap';

const CardReceta = ({ recetas }) => {
  return (
    <div className='col-lg-6'>
      <Card>
        <CardImg src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <CardBody>
          <CardTitle>{recetas.nombreReceta}</CardTitle>
          <CardText>
            {recetas.fecha} | por {recetas.autor}
            <br></br>
            {recetas.descripcionBreve}
          </CardText>
          <Button variant='primary'>Seguir leyendo</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardReceta;
