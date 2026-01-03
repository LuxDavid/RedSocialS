import React from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail.jsx';
import { getProduct } from "../databases/mongoDB/products.db.js";
import {useState, useEffect} from 'react';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const params= useParams();

   const productAjax= () => {
      getProduct(params.pid)
      .then((data)=> {
        setProduct(data);
      });
    }

    useEffect(() => {
        productAjax();
    }, []);
    
  return (
    <div className='Item__detailContainer'>
      
      <ItemDetail product={product}/>

    </div>
  )
}

export default ItemDetailContainer