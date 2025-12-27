import Item from "./Item.jsx";
import { useState, useEffect } from "react";
import { getProducts } from "../databases/mongoDB/products.db.js";
import Button from 'react-bootstrap/Button';

function ItemListContainer() {

  const [products, setProducts] = useState({ docs: [] });

  const productsAjax= (page) => {
    getProducts(page)
    .then((data)=> {
      setProducts(data);
    });
  }

  const nextPage= () => {
      productsAjax(products?.page+1);
      console.log(products?.page+1);
  }

   const prevPage= () => {
      productsAjax(products?.page-1);
      console.log(products?.page-1);
  }

  useEffect(() => {
      productsAjax()
  }, []);


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
        
        { products?.hasNextPage && <Button className="button--change" onClick={nextPage}>Pagina Siguiente</Button> }
        { products?.hasPrevPage && <Button className="button--change" onClick={prevPage}>Pagina Anterior</Button> }
      </div>
    </>

  );
}

export default ItemListContainer;