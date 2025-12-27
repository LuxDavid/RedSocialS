import React from 'react';
import {useParams} from "react-router-dom";


const ItemDetail = () => {

    const params= useParams();
    // console.log(params.id);
    
  return (
    <div>Product Detail</div>
  )
}

export default ItemDetail