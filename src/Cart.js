import React from 'react';
import { useAPI, useDispatchCart } from './Home';

const Cart =({product, index, handleRemove}) => {

    const item =useAPI();
    return(
        <article>
            <h1>{item.image}</h1>
        </article>
    )
}

export default Cart;

 
  