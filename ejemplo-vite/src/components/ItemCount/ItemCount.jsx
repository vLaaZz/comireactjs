import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const ItemCount = ({stock, initial, handleAddToCart}) => {
    const navigate = useNavigate();
    const [cantItems, setcantItems] = useState(0);
    const [prodAgregado, setProdAgregado] = useState(false);

    const sumar =()=> {
        setcantItems(cantItems+1);
    };

    const restar =()=> {
        if (stock > 0) {
            setcantItems(cantItems - 1);
        }
    };

    const handleTerminarCompra = ()=> {
        setProdAgregado(true);
        navigate("/cart");
    };

    const handleAgregarAlCarrito = ()=> {
        setProdAgregado(true);
        handleAddToCart(cantItems);
    };

return (
    <>
        <div>Cantidad de Objetos</div>
        <div>
            <button onClick={sumar}> + </button>
            <span> {cantItems} </span>
            <button onClick={restar}> - </button>
        </div>
        {prodAgregado ? (
        <button onClick={handleTerminarCompra}> Terminar Compra </button>
        ) : (
        <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
        )}

    </>
    );
};