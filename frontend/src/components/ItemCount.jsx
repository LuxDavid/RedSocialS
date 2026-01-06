import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({quantity, stock}) => {
    return (
        <>
            <div className='info__itemsAdd'>
                <div className="item__button">-</div>
                <div className='item__quantity'>
                    <p>{quantity}</p>
                </div>
                <div className="item__button">+</div>
            </div>
            <div className='item__addCart'>
                <Button variant="outline-success" className='info__addButton' disabled={stock === 0}>🛒 Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount