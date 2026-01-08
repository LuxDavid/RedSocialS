import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({quantity, stock, handleCount}) => {

    const navigate= useNavigate();

    return (
        <>
            <div className='info__itemsAdd'>
                <div className="item__button" onClick={() => handleCount("minus")}>-</div>
                <div className='item__quantity'>
                    <p>{quantity}</p>
                </div>
                <div className="item__button" onClick={() => handleCount("plus")}>+</div>
            </div>
            <div className='item__addCart'>
                <Button variant="outline-success" className='info__addButton' disabled={stock === 0} onClick={()=> navigate("/checkout")}>🛒 Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount