import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import CartProvider from './Home';
import FeaturedProducts from './componrnts/Store/store';
import Cart from './Cart';
import Product from './Pops';
import About from './componrnts/About/About';
import SignIn from './componrnts/Signin/Signin';
import url4 from './componrnts/images/url4.png';
import url5 from './componrnts/images/url5.svg';
import url6 from './componrnts/images/url6.svg';
import './index.css';
import './imb.css';
function App() {
  
  return (
  
    <CartProvider>
    <Router>
      <nav>
         <div className="left">
          <Link to="/" style={{textDecoration: "none",fontSize:"1.4vmax", color:"white", fontFamily:"fantasy"}}>
           PixLab
        </Link></div>
         <img src={url4} style={{marginLeft:"2rem", height:"3rem",marginTop:"0.5rem"}} alt=""/>
          <div className="sub-mid">
              {
                <input type="text" style={{width:"30rem", textDecoration:"none",borderRadius:"3rem",marginLeft:"3rem"}} />
              }
          </div>
          <div className="mid" >
            <Link to="/" style={{textDecoration: "none",fontSize:"1vmax", color:"white",fontFamily:"fantasy" }}>
              Home
            </Link>
            <Link to="/about" style={{textDecoration: "none",fontSize:"1vmax", color:"white",fontFamily:"fantasy"}}>
              About
            </Link>
            <Link to="/products" style={{textDecoration: "none",fontSize:"1vmax", color:"white",fontFamily:"fantasy"}}>
              Products
            </Link>
            
         </div>
         <div className="right">
           <Link to="/signin" style={{textDecoration: "none",fontSize:"1.1vmax", color:"white",fontFamily:"fantasy"}}>
             SignIn
           </Link>
          <Link to="/cart"> <img src={url6} alt="" style={{height:"1.4rem" ,marginTop:"1.2rem", marginLeft:"3rem"}}/></Link>
           <img src={url5} alt="" style={{height:"1.4rem" ,marginTop:"1.2rem", marginLeft:"3rem"}}/>
           
         </div> 
       </nav>
      <div>
        <Switch>
          <Route exact path='/' component={FeaturedProducts} />
          <Route exact path='/product/:id' component={Product} />
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/addToCart" component={Cart}></Route>
        </Switch>
      </div>

      <div className="footer">
         <div className="main-footer">
           <h2>Contect</h2>
          <p >
          Street 2017 Haroon Drive
           City Bathermon
           State Full Marri<br/>
           Zip Code 10234<br/>
           Phone no: +00125649872.
         </p>
         <div className="footer-input">
          <h1 style={{color:"white", fontSize:"15px", fontStyle:"normal", lineHeight:"1rem"}}>Email</h1>
            <input type="text">

           </input>
         </div>

         <div className="links">
            
          </div>
       </div>
        
     </div>
    </Router>
    </CartProvider>
    
  );
}
export default App;