import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';


function Products(props) {
    const {product} = props


  return (
    <Card>
            <Link to={`/product/${product.slug}`}>
            <img  src={product.image}  alt={product.name} className='card-img-top'/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
            
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Card.Text><strong>N{product.price}</strong></Card.Text>
            <Button>Add to Cart</Button>
            </Card.Body>
            <div  className='product-info'>
            
            
          
            </div>
          </Card>
  )
}



export default Products

