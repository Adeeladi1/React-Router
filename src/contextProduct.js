import React from 'react';
import { Link } from 'react-router-dom';
const Products =({product}) =>{
    return(
        <>
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        
    
         </>
        
    )
}

export default Products;