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
    const [precioTotal, setPrecioTotal] = useState(0);
    
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                setCart(parsedCart);
                setTotalQty(parsedCart.reduce((acc, elem) => acc + elem.qty, 0));
                setPrecioTotal(parsedCart.reduce((acc, elem) => acc + elem.precio * elem.qty, 0));
            } catch (error) {
                console.error("Error al analizar el JSON:", error);
                setCart([]);
            }
        }
    }, []);

    useEffect(() => {
        setCartToLocalStorage(cart);
    }, [cart]);

    const addToCart = (item, qty) => {
        setTotalQty(totalQty + qty);
        setPrecioTotal(precioTotal + item.precio * qty);
        let newCart = [];
        if (isInCart(item.id)) {
            newCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty };
                } else {
                    return elem;
                }
            });
        } else {
            newCart = [...cart, { ...item, qty }];
        }
        setCart(newCart);
    };

    const isInCart = (id) => {
        return cart.some((elem) => elem.id === id);
    };

    const removeItem = (id) => {
        const itemToRemove = cart.find((elem) => elem.id === id);
        if (itemToRemove) {
            setPrecioTotal(precioTotal - itemToRemove.precio * itemToRemove.qty);
            setTotalQty(totalQty - itemToRemove.qty);
            const newCart = cart.filter((elem) => elem.id !== id);
            setCart(newCart);
        }
    };

    const clearCart = () => {
        setTotalQty(0);
        setCart([]);
        setPrecioTotal(0);
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