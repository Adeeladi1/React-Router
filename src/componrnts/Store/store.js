import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Products from '../../contextProduct';

const FeaturedProducts = ({children}) => {
    const [products, setProducts] = useState([]);
    
    
  useEffect(() => {
      fetchProducts();
    }, []);
  const fetchProducts = () => {
      axios
        .get('https://shoppingapiacme.herokuapp.com/shopping')
        .then((res) => {
          console.log(res);
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
       
    };
        return (


          <>
          <div className="main-pro">

          {products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
            
          </>
        );
      }

      export default FeaturedProducts;