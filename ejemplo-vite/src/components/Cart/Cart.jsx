import React from 'react';
import { useCartContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { db } from '../../firebase/dbConnection';
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {
  const { cart, precioTotal, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: '', tel: '', email: '' });

  const handleRemoveItem = (id, precio, qty) => {
    removeItem(id, precio, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveCart = async () => {
    console.log('Saving in Database');
    console.log(formData);
    console.log(cart);

    try {
      const ordersCollection = collection(db, "orders");
      const newOrder = {
        buyer: formData,
        items: cart,
        date: new Date(),
        total: precioTotal,
      };
      const docRef = await addDoc(ordersCollection, newOrder);
      alert("Compra Realizada Correctamente, su código de orden es: " + docRef.id);
      clearCart();
      setFormData({ name: '', tel: '', email: '' });
    } catch (err) {
      console.log(err);
    }
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, nombre, precio, qty }, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{nombre}</td>
              <td>{precio}</td>
              <td>{qty}</td>
              <td>
                <button onClick={() => handleRemoveItem(id, precio, qty)}>Quitar Objeto</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>Precio Total</td>
            <td>$ {precioTotal}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={handleClearCart}>Limpiar Carrito</button>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ingrese Nombre"
        onChange={(e) => handleOnChange(e)}
        value={formData.name}
      />
      <input
        type="number"
        name="tel"
        id="tel"
        placeholder="Ingrese Teléfono"
        onChange={(e) => handleOnChange(e)}
        value={formData.tel}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingrese Email"
        onChange={(e) => handleOnChange(e)}
        value={formData.email}
      />
      <button onClick={handleSaveCart}>Finalizar Compra</button>
    </>
  );
};

export default Cart;