/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
    const [totalQty, setTotalQty] = useState(0);
    const [cart, setCart] = useState([]);
    const [precioTotal, setPrecioTotal] = useState([0]);
    

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
    
        if (cart) {
            setCart(cart);
            setTotalQty(cart.reduce((acc,elem) => acc + elem.qty, 8));
            setPrecioTotal(cart.reduce((acc,elem) => acc + elem.precio * elem.qty, 0));
        }
        }, []);
    
    const addToCart= (item, qty) => {
        setTotalQty(totalQty + qty);
        setPrecioTotal(precioTotal + item.precio * qty);
        let newCart = [];
        if (isInCart(item.id)) {
            newCart = cart.map((elem)=> {
                if (elem.id === item.id) {
                    return {...elem, qty: elem.qty + qty};
                } else {
                    return elem;
                }
            });
            setCart(newCart);
        }else {
            newCart = [...cart, {...item, qty}];
            setCart(newCart);
        }
        setCartToLocalStorage();
    };
    
    const isInCart = (id) => {
        return cart.some((elem) => elem.id === id);
    };
    
    const removeItem = (id, precio, qty)=> {
       setPrecioTotal(precioTotal - precio * qty);
       setTotalQty(totalQty - qty);
       setCartToLocalStorage();
       
       const newCart = cart.filter((elem)=> elem.id !== id);
       console.log(newCart);
       setCart(newCart);
        };
    
    
    const clearCart = () => {
        setTotalQty(0);
        setCart([]);
        setPrecioTotal(0);
        setCartToLocalStorage([]);
    };

    const setCartToLocalStorage = (cartToSave) => {
        localStorage.setItem("cart", JSON.stringify(cartToSave));
    };
        
    const contextValue = {
        totalQty,
        addToCart,
        cart,
        removeItem,
        clearCart,
        precioTotal,
    };
    
    return (<Provider value={contextValue}>{children}</Provider>);
};

export default CartContextProvider;