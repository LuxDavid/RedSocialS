import Item from "./Item.jsx";
import { useState, useEffect } from "react";
import { getProducts } from "../databases/mongoDB/products.db.js";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ItemListContainer() {

  const [products, setProducts] = useState({ docs: [] });

  useEffect(() => {

    getProducts()
      .then(data => {
        setProducts(data);
        console.log(data);
        
      });
  }, [products]);


  return (
    <>
      <div className='cards__container'>

        {
          products?.docs.map(prod => (
            <Item product={prod} key={prod._id} />
          ))
        }

      </div>

      <div id="buttonProducts__container">
        
        { products?.hasNextPage && <Button className="button--change">Pagina Siguiente</Button> }
        { products?.hasPrevPage && <Button className="button--change">Pagina Anterior</Button> }
      </div>
    </>

  );
}

export default ItemListContainer;