
import { Item } from "../Item/Item"
import PropTypes from 'prop-types';
import './ItemList.css'



export const ItemList = ({productsList}) => {
    
    console.log(productsList)

    return (
    
        <div className="itemlist">
            {productsList.map((elem)=>{
                return <Item key={elem.id} {...elem}/>
            })}
        </div>
    )
}

ItemList.propTypes = {
    productsList: PropTypes.array.isRequired
};