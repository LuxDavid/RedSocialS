import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Item = ({product}) => {
    return (
        <>
            <Card style={{ width: '15rem', height: "17rem" }} className='card__product'>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title className='product--text'>{product.title}</Card.Title>
                    <Card.Text className='product--text'>
                       {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='product--text'>{`Categoria: ${product.category}`}</ListGroup.Item>
                    <ListGroup.Item className='product--text'>{`$${product.price} MXN`}</ListGroup.Item>
                    <ListGroup.Item className='product--text'>{`Stock: ${product.stock}`}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#" className='product--text'>{`Vendedor: ${product.owner}`}</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item