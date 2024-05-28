import Card from "react-bootstrap/Card"
import {ItemCount} from '../ItemCount/ItemCount.jsx'
import { useCartContext } from "../../context/CartContext.jsx";

export const ItemDetail = ({id, nombre, precio, stock, descripcion, imagen}) => {

  const {addToCart} = useCartContext();


  const handleAddToCart = (cantItems)=> {
    addToCart({id, nombre, precio, stock, descripcion, imagen}, cantItems)
    console.log (`Se agregaron ${cantItems} al carrito`);
}


  return (
    <Card style={{ width: '18rem', cursor:"pointer" }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>{descripcion}</Card.Text>
      <Card.Text>Precio:{precio}</Card.Text>
      <Card.Text>Stock:{stock}</Card.Text>
      <ItemCount stock={stock} initial={1} handleAddToCart={handleAddToCart}></ItemCount>
    </Card.Body>
  </Card>
  )
}
