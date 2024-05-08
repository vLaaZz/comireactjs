import Card from "react-bootstrap/Card"
import {ItemCount} from '../ItemCount/ItemCount.jsx'


export const ItemDetail = ({id, nombre, precio, stock, descripcion, imagen}) => {

  return (
    <Card style={{ width: '18rem', cursor:"pointer" }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>{descripcion}</Card.Text>
      <Card.Text>Precio:{precio}</Card.Text>
      <Card.Text>Stock:{stock}</Card.Text>
      <ItemCount stock={stock} initial={1}></ItemCount>
    </Card.Body>
  </Card>
  )
}
