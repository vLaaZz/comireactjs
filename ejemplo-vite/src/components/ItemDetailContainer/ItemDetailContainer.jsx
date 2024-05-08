import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProductById} from '../../utils/MockData.js'
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx'

export const ItemDetailContainer = () => {

    const {prodId} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductById(prodId)
        .then((res) => {
            setProduct(res)})
        .catch((error) => {
            console.log(error)});
    }, [prodId]);

  return (
    <div>
        <ItemDetail {...product}></ItemDetail>
    </div>
  )
}
