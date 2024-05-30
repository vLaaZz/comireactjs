import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProductById} from '../../utils/MockData.js'
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx'
import {collection, getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase/dbConnection.js';

export const ItemDetailContainer = () => {

    const {prodId} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, prodId);
        getDoc(refDoc).then ((doc) => {
        setProduct({id:doc.id, ...doc.data()})
      }).catch((err) => {
        console.log(err);
      });




        //getProductById(prodId)
        //.then((res) => {
        //    setProduct(res)})
        //.catch((error) => {
        //    console.log(error)});
    }, [prodId]);

  return (
    <div>
        <ItemDetail {...product}></ItemDetail>
    </div>
  )
}
