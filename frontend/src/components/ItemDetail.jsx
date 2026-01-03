import React from 'react';
import productImgTest from "../public/img/producto-prueba.jpg"
import Item_info from './Item_info.jsx';
import CarouselMini from './CarouselMini.jsx';

const ItemDetail = ({product}) => {
  return (
    <div className='Item__detail'>
        <div className="detail__item">
          <div>
            <img src={productImgTest} alt="" className='detail__img' />
            <CarouselMini images={[productImgTest, productImgTest,productImgTest, productImgTest,productImgTest, productImgTest]}/>
          </div>
            
            <Item_info product={product}/>
            
        </div>
         
    </div>
  )
}

export default ItemDetail