import React from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail.jsx';



const ItemDetailContainer = () => {

    const params= useParams();
    // console.log(params.id);
    
  return (
    <div className='Item__detailContainer'>
      
      <ItemDetail/>

    </div>
  )
}

export default ItemDetailContainer