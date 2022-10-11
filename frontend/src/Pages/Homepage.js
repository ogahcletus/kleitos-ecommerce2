import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
//import { useState } from 'react';
import logger from 'use-reducer-logger';
import { useReducer, useEffect } from 'react';


const reducer = ( state, action) => {
    switch(action.type){
      case 'FETCH_REQUEST':
        return{...state, loading: true}
      case 'FETCH_SUCCESS':
        return{...state, products: action.payload, loading: false}
      case 'FETCH_FAIL': 
        return{...state, error:action.payload, loading : false}
      default:
        return state;

    }
}

function Homepage() {

  //const[products, setProducts] = useState([]);  commented out so we could use reducer to manage the states

  //useReducer

  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    loading: true,
    products: [],
    error: ''
  })



  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const response = await axios.get('/api/products')
        dispatch({type:'FETCH_SUCCESS', payload: response.data})

      } catch (error) {
        dispatch({type:'FETCH_FAIL', payload: error.message,})
        
      }
      
      //setProducts(response.data)
    }

    fetchData();

  }, [])
  return (
    <div>
<h1>Featured Products</h1>
        <div className='products'>
        { loading? (
           <div>loading...!</div>
        ) : error? (
            <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className='product' key={product.slug}>
            <Link to={`/product/${product.slug}`}>
            <img  src={product.image}  alt={product.name} className='product-image'/>
            </Link>
            <div  className='product-info'>
            <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </Link>
            <p><strong>N{product.price}</strong></p>
            <button>Add to Cart</button>
          
            </div>
          </div>

          ))
        )}
        </div>
     
    </div>
  )
}



export default Homepage

