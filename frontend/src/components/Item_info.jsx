import React from 'react';


const Item_info = ({product}) => {

    const {title,description,category,stock,price,owner} = product

    return (
        <div className='item__info'>
                <p className='info__text'>{title}</p>
                <p>Disponibles: {stock}</p>
                <p className='info__text'>{description}</p>
                <hr/>
                <p className='info__text'>Categoria:{category}</p>
                <p>${price}</p>
                <p>Vendedor: {owner}</p>
        </div>
    )
}

export default Item_info