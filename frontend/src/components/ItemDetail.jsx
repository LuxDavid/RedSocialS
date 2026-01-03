import React from 'react';
import productImgTest from "../public/img/producto-prueba.jpg"
import Item_info from './Item_info.jsx';

const ItemDetail = ({product}) => {
  return (
    <div className='Item__detail'>
        <div className="detail__item">
            <img src={productImgTest} alt="" className='detail__img' />
            <Item_info/>
        </div>
         
    </div>
  )
}

export default ItemDetail