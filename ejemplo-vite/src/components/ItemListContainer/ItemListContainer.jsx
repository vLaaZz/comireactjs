import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../utils/MockData'
import  {ItemList}  from '../ItemList/ItemList'
// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])



    useEffect (()=> {
      getProducts()
        .then((res)=> {
          setProducts(res)
        })
        .catch((error) => {
          console.log(error)
        })
},  [])

  return (
    <main>
      <h1 className="color-titulo">{ titulo }</h1>
      <ItemList productsList={products}/>
    </main>
  )
}
