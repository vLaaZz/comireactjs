import React from 'react'
import { useCartContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const {cart, precioTotal, removeItem, clearCart } =useCartContext();
  
  const handleRemoveItem = (id, precio, qty) => {
    removeItem(id, precio, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {cart?.map(({ id, nombre, precio, qty}, index) => {
          return (
          <tr key={index}>
          <td>{id}</td>
          <td>{nombre}</td>
          <td>{precio}</td>
          <td>{qty}</td>
          <td>
            <button onClick={() => handleRemoveItem(id, precio, qty)}>Quitar Objeto</button>
          </td>
        </tr>
        );
        })};
        <tr>
        <td colSpan={4}>Precio Total</td>
        <td> $ {precioTotal}</td>
        </tr>
      </tbody>
    </Table>
    <button onClick={handleClearCart}>Limpiar Carrito</button>
    <button onClick={handleClearCart}>Finalizar Compra</button>
    </>
  );
};


export default Cart;