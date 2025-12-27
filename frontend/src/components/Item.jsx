import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import productImgTest from "../public/img/producto-prueba.jpg";

const Item = ({product}) => {

        const navigate= useNavigate();

    return (
        <>
            <Card style={{ width: '15rem', height: "24.5rem", paddingBottom:'0.5rem' }} className='card__product'>
                <Card.Img variant="top" src={product.thumbnails.length === 0 ? productImgTest : product.thumbnails } />
                <Card.Body>
                    <Card.Title className='product--text'>{product.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='product--text'>{`Categoria: ${product.category}`}</ListGroup.Item>
                    <ListGroup.Item className='product--text'>{`Precio $${product.price} MXN`}</ListGroup.Item>
                    <ListGroup.Item className='product--text'>{`Stock: ${product.stock}`}</ListGroup.Item>
                </ListGroup>
                <Card.Body style={{padding:'1rem'}}>
                    <Link to="/user" className='product--text--card'>{`Vendedor: ${product.owner}`}</Link>
                </Card.Body>
                <Button variant="outline-danger outline--buton" style={{width:'6rem', margin:'auto', height:'2rem'}} onClick={()=>navigate(`/product/${product._id}`)}>
                    Ver producto
                </Button>
            </Card>
        </>
    )
}

export default Item