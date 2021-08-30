
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Status from './status';
import { useDispatchCart } from './Home';
const Product = ({match}) => {

  const dispatch =useDispatchCart();

  const addToCart =(item) => {

    dispatch({type:"ADD",item})
    
    
  }


  const [data, setData] = useState([]);
useEffect(() => {
    fetchProduct();
  },[]);
const fetchProduct = () => {
    axios
      .get(
        `https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  


return (
    <div>
      {data.map((item) => {
        return (<>
        <div className="add-cart">
          <div className='product-container' key={item.id}>
            <div>
              <img className='prod-image' src={item.image} alt='' />
            </div>
            <div>
              <h1 className='brand'>{item.brand}</h1>
              <h2>{item.item}</h2>
              <p>{item.description}</p>
              <p>
                <strong>Price:</strong> {item.price}
              </p>
              <p>
                <strong>Color:</strong> {item.color}
              </p>
            </div>
          </div>

          <div className="right-bar">
            <div className="mid-add">
              <div style={{marginLeft:"2rem"}}>
                <h2>seller</h2>
                {item.item}
                <div className="price-bar">
                  <div> Price</div>
                   <div className="right-price" style={{marginRight:"2rem"}}> {item.price}</div>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                <h2>Status </h2><Status/>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                <div>Qnty</div>
                </div>
                 <div style={{display:"flex"}}>
                   <div><img src={item.image} style={{width:"4rem",height:"3rem",borderRadius:"0.4rem",marginTop:"1rem"}} alt=''/></div>
                <div style={{marginLeft:"8rem", marginTop:"1.5rem"}}><Link to="/addToCart"> <button onClick={addToCart(item)} >Add To Cart</button></Link></div> </div>
                  </div>
             </div>
          </div>
        </div>
       </> );
      })}
      <div className='back'>
        <Link to='/'>
          <button>Back to shop</button>
          </Link>
      </div>
      
    </div>

    
  );
};
export default Product;

