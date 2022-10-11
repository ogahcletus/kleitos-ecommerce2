//import data from '../data';
import axios from 'axios';
//import { useState } from 'react';
import logger from 'use-reducer-logger';
import { useReducer, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from '../Components/Products';


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
          <Row>
          
         { products.map((product) => (
          <Col key={product.slug} sm={6}  md={4}  lg={2} className='mb-3'>
          <Products product={product}></Products>
            
          </Col>
          ))

         }
          </Row>
        )}
        </div>
     
    </div>
  )
}



export default Homepage

