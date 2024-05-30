import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../utils/MockData';
import  {ItemList}  from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../firebase/dbConnection';
import {collection, getDocs, query, where} from 'firebase/firestore';
// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams();

  
    useEffect (()=> {

      const productsCollection = collection(db, "products")

      if (categoryId) {
        const cons = query(productsCollection, where("category", "array-contains", categoryId));
        getDocs(cons)
        .then(({docs})=> {
          const prodFromDocs = docs.map((doc)=> ({id: doc.id, ...doc.data()}));
          setProducts(prodFromDocs);
        }) .catch((error) => {
            console.log(error)
        });
      } else {
        getDocs(productsCollection)
        .then(({docs})=> {
          const prodFromDocs = docs.map((doc)=> ({id: doc.id, ...doc.data()}));
          setProducts(prodFromDocs);
        }) .catch((error) => {
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
