import React, {  createContext, useContext, useReducer} from 'react';

const APIContext =createContext();
const CartDispatchContext= createContext();

const reducer =(state, action) =>{
  switch(action.type){
    case "ADD":
    return [...state, action.item];
    default:
      throw new Error(`unknow action ${action.type}`)
  }
}
  const CartProvider = ({children}) => {
  const [state, dispatch] =useReducer(reducer, []);
  
  
return (
       <>
       <CartDispatchContext.Provider value={dispatch}>
       <APIContext.Provider value={state}>

                {children}
        </APIContext.Provider>

        
       </CartDispatchContext.Provider>       
           
  </>
    )

    }

export default CartProvider;

export const useAPI =() => useContext(APIContext);
export const useDispatchCart =() => useContext(CartDispatchContext);

