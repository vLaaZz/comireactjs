import { useState } from "react"


export const ItemCount = ({}) => {

    const [stock, setStock] = useState(0)

    const sumar =()=> {
        setStock(stock+1)
    }

    const restar =()=> {
        if (stock > 0) {
            setStock(stock - 1)
        }
    }


    const handleAddToCart = ()=> {
        console.log(`Se agregaron ${stock} al carrito`)
    }


return (
    <>
        <div>Cantidad de Objetos</div>
        <div>
            <button onClick={sumar}> + </button>
            <span> {stock} </span>
            <button onClick={restar}> - </button>
        </div>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </>
)
}
