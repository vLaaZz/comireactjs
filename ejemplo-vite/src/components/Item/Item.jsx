
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({id, nombre, precio, stock, imagen, type}) => {

  
  const handleonClick = ()=> {
    console.log("click")
  };
  return (
    <Card style={{ width: '18rem', cursor:"pointer" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Link to={`/products/${id}`} onClick={handleonClick}>Detalles</Link>
      </Card.Body>
    </Card>
  );
}


