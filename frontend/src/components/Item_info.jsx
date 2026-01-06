import {useState} from 'react';
import ItemCount from './ItemCount.jsx';


const Item_info = ({product}) => {

    const {title,description,category,stock,price,owner} = product

    const [quantity,setQuantity] = useState(1);

    return (
        <div className='item__info'>
                <p className='info__text'>{title}</p>
                <p className='info__stock'>Disponibles: {stock}</p>
                <p className='info__text' style={{fontSize:"1.1rem",color:"#ccc"}}>{description}</p>
                <hr/>
                <p className='info__text'>Categoria:{category}</p>
                <p className='info__stock'>${price}</p>
                <p className='info__stock'>Vendedor: {owner}</p>
                <hr/>
                <ItemCount quantity={quantity} stock={stock}/>
        </div>
    )
}

export default Item_info