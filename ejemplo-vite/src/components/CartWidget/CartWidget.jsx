import './CartWidget.css';
import { useCartContext } from '../../context/CartContext';
export const CartWidget = () => {
  const {totalQty} = useCartContext();
  return (
    <div className="carrito">
        <span>🛒</span>
        <span>{totalQty}</span>
        
    </div>
  )
}
