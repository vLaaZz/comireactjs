import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../utils/MockData'
import  {ItemList}  from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams();

  
    useEffect (()=> {

      if (categoryId) {
        getProductsByCategory(categoryId).then((res)=> {
          setProducts(res);
        });
      } else {
        getProducts()
        .then((res)=> {
          setProducts(res)
        })
        .catch((error) => {
          console.log(error)
        });
      }

    },  [categoryId])

  return (
    <main>
      <h1 className="color-titulo">{ titulo }</h1>
      <ItemList productsList={products}/>
    </main>
  )
}
